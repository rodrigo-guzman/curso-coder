import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';


function CartWidget(){
    return <>
    <Container maxWidth='xl' sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'none', md: 'flex' } }}>
    <ShoppingCartIcon />
    </Container>
    </> ;
}

export default CartWidget;