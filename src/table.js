import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, novice, proficient, expert) {
  return { name, novice, proficient, expert };
}

const rows = [
  createData('Python', null, null, <CheckIcon/>),
  createData('JavaScript', null, <CheckIcon/>, null),
  createData('TypeScript', <CheckIcon/>, null, null),
  createData('HTML', null, null, <CheckIcon/>),
  createData('CSS', null, null, <CheckIcon/>),
  createData('Java', null, <CheckIcon/>, null),
  createData('C', null, <CheckIcon/>, null),
];

function SkillTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Novice</TableCell>
            <TableCell align="right">Proficient</TableCell>
            <TableCell align="right">Expert</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.novice}</TableCell>
              <TableCell align="right">{row.proficient}</TableCell>
              <TableCell align="right">{row.expert}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SkillTable;
