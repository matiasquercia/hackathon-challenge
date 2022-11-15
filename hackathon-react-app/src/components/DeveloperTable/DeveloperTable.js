import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function DeveloperTable({developers}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Ranking</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Email</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {developers.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.firstName+' '+row.lastName}</TableCell>
              <TableCell align="right">{row.ranking}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}