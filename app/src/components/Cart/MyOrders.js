import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {CartContext} from '../Context/CartContext';
import Checkboxs from './Checkboxs';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  action: {
    '& > *': {
      margin: '0 5px',
    },
  }
});

const rows = [
  {'name':'SSO Oka','users':'100','monthly':'5','yearly':'','amount':'200'},
  {'name':'Adaptive','users':'150','monthly':'','yearly':'40','amount':'2000'}
];
export default function MyOrders() {
  const classes = useStyles();
  const [cart, setCart] = useContext(CartContext);
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(!checked);
  };
//console.log(cart);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >
              <Checkboxs />
            </TableCell>
            <TableCell align="center" className={classes.th}>Products</TableCell>
            <TableCell align="center" className={classes.th}>No.Of Users</TableCell>
            <TableCell align="center" className={classes.th}>Monthly</TableCell>
            <TableCell align="center" className={classes.th}>Yearly</TableCell>
            <TableCell align="center" className={classes.th}>Amount</TableCell>
            <TableCell align="center" className={classes.th}>Select</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Checkboxs />
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.users}</TableCell>
              <TableCell align="center">{row.monthly? '$':''} {row.monthly}</TableCell>
              <TableCell align="center">{row.yearly? '$':''} {row.yearly}</TableCell>
              <TableCell align="center">${row.amount}</TableCell>
              <TableCell align="center">
              <div className={classes.action}>
                <IconButton color="secondary" aria-label="delete">
                  <DeleteIcon htmlColor="#CE0202" />
                </IconButton>
                <IconButton color="secondary" aria-label="edit">
                  <EditIcon htmlColor="#000" />
                </IconButton>
              </div>
              </TableCell>
            </TableRow>
          ))}

          <TableRow key='total'>
            <TableCell colSpan={2} align="left">Total</TableCell>
            <TableCell align="center">250</TableCell>
            <TableCell align="center">$5</TableCell>
            <TableCell align="center">$40</TableCell>
            <TableCell align="center">$2500</TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}
