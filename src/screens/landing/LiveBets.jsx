import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, game, time, bet, payout) {
    return { id, game, time, bet, payout };
}

const rows = [
    createData(
        0,
        'Elvis Presley',
        '2:23 pm',
        '$450,00',
        '$450',
    ),
    createData(
        1,
        'Paul McCartney',
        '2:23 pm',
        '$450,00',
        '$450',
    ),
    createData(2, 'Tom Scholz', '2:23 pm',
        '$450,00',
        '$450',),
    createData(
        3,
        'Michael Jackson',
        '2:23 pm',
        '$450,00',
        '$450',
    ),
    createData(
        4,
        'Bruce Springsteen',
        '2:23 pm',
        '$450,00',
        '$450',
    ),
];
function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Game</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Bet</TableCell>
            <TableCell align="right">Payout</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
                
              <TableCell>{row.game}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.bet}</TableCell>
              <TableCell  align="right">{row.payout}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}

