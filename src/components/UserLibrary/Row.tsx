import { Box, Collapse, IconButton, TableCell, TableRow } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { Entry } from 'types/types';
import { TransitionsModal } from 'components/Basic/Modal';
import { useHistory } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';
import { editEntry } from 'actions/entries';
import { useDispatch } from 'react-redux';
import Button from 'components/Basic/Button/Button';

type Props = {
  entry: Entry;
};

export const EntryRow = (props: Props) => {
  const { entry } = props;
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleDeleteModal = () => {
    setDeleteOpen((prevState) => !prevState);
  };

  const handleDeleteConfirmation = () => {
    // soft delete
    dispatch(
      editEntry(
        entry.id,
        'deleted',
        'This entry has been deleted',
        1,
        false,
        true,
      ),
    );
  };

  const handleEdit = () => {
    history.push(`/write/${entry.id}`);
  };

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {entry.name}
        </TableCell>
        <TableCell align="right">
          {entry.submission_time.slice(0, 10)}
        </TableCell>
        <TableCell align="right">{entry.wordCount}</TableCell>
        <TableCell align="right">{entry.public}</TableCell>
        <TableCell align="right">
          <Button onClick={handleEdit} label="Edit" />
        </TableCell>
        <TableCell align="right">
          <Button
            onClick={() => handleDeleteModal()}
            variant="outlined"
            label="Delete"
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* eslint-disable react/no-danger -- sanitized html */}
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(entry.content),
                }}
                className="m-12"
              />
              {/* eslint-enable react/no-danger -- sanitized html */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TransitionsModal
        handleOpen={handleDeleteModal}
        open={deleteOpen}
        handleConfirmation={handleDeleteConfirmation}
      />
    </>
  );
};
