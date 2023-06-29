import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from '@mui/material';
import { Entry } from 'types/types';
import { EntryRow } from './Row';

type Props = {
  entries: Entry[];
};

export const UserTable = (props: Props) => {
  const { entries } = props;
  const headers = [
    'Title',
    'Date',
    'Word Count',
    'Public?',
    'Edit Entry',
    'Delete Entry',
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredEntries = entries.filter((entry) => entry.isDeleted !== true);
  const sortedEntries = filteredEntries.sort(
    (a, b) => Date.parse(a.submission_time) - Date.parse(b.submission_time),
  );
  const paginatedEntries = sortedEntries.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {headers.map((header) => (
              <TableCell key={header} align="center">
                {header}
              </TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedEntries.map((entry) => (
            <EntryRow entry={entry} key={entry.id} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={filteredEntries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
