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
import {grey, red} from '@mui/material/colors';
import { Button, Container, TextField } from '@mui/material';
import AddAndReset from './AddAndReset';
import {NavLink} from 'react-router-dom';
import {Checkout} from './Checkout';

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
    const {  cart, removeToCart, removeAllToCart, totalPrice } = useContext(contextCart);
    const color = red[500];

    return (
        <>
        { Boolean(cart.length) ? 
          (<>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                      <StyledTableHeader align="left">CARRITO DE COMPRAS</StyledTableHeader>
                      <StyledTableHeader align="center"></StyledTableHeader>
                      <StyledTableHeader align="center"></StyledTableHeader>
                      <StyledTableHeader align="center"></StyledTableHeader>
                      <StyledTableHeader align="right">
                          <Button onClick={() => {removeAllToCart()}} title='Eliminar Todos' sx={{ alignItems: 'center', justifyContent: 'center' }}>
                              <DeleteIcon fontSize="medium" sx={{ color: grey }} />                                              
                          </Button>
                      </StyledTableHeader>
                    </TableRow>
                  </TableHead>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Productos</StyledTableCell>
                      <StyledTableCell align="left">Precio</StyledTableCell>
                      <StyledTableCell align="center">Cantidad</StyledTableCell>
                      <StyledTableCell align="center">Agregar/Quitar</StyledTableCell>
                      <StyledTableCell align="left">Eliminar</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.map((row) => (
                      <StyledTableRow key={row.title}>
                        <StyledTableCell component="th" scope="row">
                          {row.title}
                        </StyledTableCell>
                        <StyledTableCell align="left">${row.price}</StyledTableCell>
                        <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                        <StyledTableCell align="left"><AddAndReset cartAddReset = { row } /></StyledTableCell>
                        <StyledTableCell align="left">
                          <Button onClick={() => {removeToCart(row.id)}} sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
                              <DeleteIcon fontSize="medium" sx={{ color: grey }} />                        
                          </Button>
                        </StyledTableCell>

                      </StyledTableRow>
                    ))}
                  </TableBody>    

                  <TableBody>
                  <StyledTableCell align="left" style={{fontWeight: 'bold'}}>Precio Total: ${totalPrice}</StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  
                  </TableBody>    

              </Table>
            </TableContainer>
            <Checkout/></>
          )
          :
          (
              <Container sx={{padding: '4em', justifyContent: 'center', alignContent: 'center'}}>
                  <TextField value={'No existen elementos'} sx={{paddingBottom: '4em'}}></TextField>
                  <NavLink to= {`/`} style={{textDecoration: 'none'}}>
                      <Button
                          variant='contained'
                          sx={{ display: 'flex', backgroundColor: color}}>
                          Volver a Home
                      </Button>
                  </NavLink>
              
              </Container>
          )
        }
        
        
        </>
      );
}

export default Cart;