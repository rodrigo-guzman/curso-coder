import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { contextCart } from '../contexts/ContextCart';
import {useContext} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from "@mui/material/colors";
import { Button } from '@mui/material';
import AddAndReset from './AddAndReset';

const StyledTableHeader = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 94,
    },
  }));

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

const Cart = () => {
    const {cart, removeToCart, removeAllToCart} = useContext(contextCart);

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
              <TableRow>
                <StyledTableHeader align="left">CARRITO DE COMPRAS</StyledTableHeader>
                <StyledTableHeader align="center"></StyledTableHeader>
                <StyledTableHeader align="center"></StyledTableHeader>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">
                    <Button onClick={() => {removeAllToCart()}} title='Eliminar Todos' sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
                        <DeleteIcon fontSize="medium" sx={{ color: grey }} />                                              
                    </Button>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow>
                <StyledTableCell>Productos</StyledTableCell>
                <StyledTableCell align="left">Precio</StyledTableCell>
                <StyledTableCell align="left">Cantidad</StyledTableCell>
                <StyledTableCell align="left">Eliminar</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((row) => (
                <StyledTableRow key={row.title}>
                  <StyledTableCell component="th" scope="row">
                    {row.title}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.price}</StyledTableCell>
                  <StyledTableCell align="left">{row.quantity}</StyledTableCell>
                  <StyledTableCell align="left">
                    <Button onClick={() => {removeToCart(row.id)}} sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
                        <DeleteIcon fontSize="medium" sx={{ color: grey }} />                        
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="left"><AddAndReset cartAddReset = { row } /></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>    
          </Table>
        </TableContainer>
      );
}

export default Cart;