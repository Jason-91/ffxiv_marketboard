import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  num: number,
  server: string,
  quality: boolean,
  price: number,
  quantity: number,
  total: number,
  percent: number,
  retainer: string,
) {
  return { num, server, quality, price, quantity, total, percent, retainer };
}

const rows = [
  createData(1, 'Balmung', false, 50000, 1, 50000, 0, 'Nyanmaru'),
  createData(2, 'Coeurl', false, 51000, 1, 51000, 1, 'Nyanmaru'),
  createData(3, 'Zalera', false, 53000, 1, 53000, 2, 'Nyanmaru'),
  createData(4, 'Malboro', false, 53500, 1, 53500, 2.5, 'Nyanmaru'),
];

export default function NormalPricesTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="right">Server</StyledTableCell>
            <StyledTableCell align="right">Quality</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
            <StyledTableCell align="right">Percent</StyledTableCell>
            <StyledTableCell align="right">Retainer</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.num}>
              <StyledTableCell component="th" scope="row">
                {row.num}
              </StyledTableCell>
              <StyledTableCell align="right">{row.server}</StyledTableCell>
              <StyledTableCell align="right">{row.quality}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.total}</StyledTableCell>
              <StyledTableCell align="right">{row.percent}</StyledTableCell>
              <StyledTableCell align="right">{row.retainer}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}