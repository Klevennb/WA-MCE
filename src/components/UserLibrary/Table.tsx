import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Entry } from 'types/types';
import { EntryRow } from './Row';

type Props = {
  entries: Entry[];
};

export const UserTable = (props: Props) => {
  const { entries } = props;
  const headers = ['Title', 'Date', 'Word Count', 'Public?', '', ''];
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {headers.map((header) => (
              <TableCell>{header}</TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {entries
            .filter((entry) => entry.isDeleted !== true)
            .map((entry) => (
              <EntryRow entry={entry} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
