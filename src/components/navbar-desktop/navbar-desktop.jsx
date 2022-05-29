//@ts-check
import React from 'react'
import { Box, Button, IconButton, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartWidget from '../cartwidget';
import { red } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';

function navbardesktop({nombre, logo, amountCart}){
    const color = red[500];
    return <>
      {/*<NavLink to={"/"} style={{textDecoration: 'none'}}>*/}
        <IconButton sx={{ p: 0, display: { xs: 'none', md: 'flex' } }}>
          <img width={50} height={50} src={logo} alt="Ecommerce" />
        </IconButton>
      {/*</NavLink>*/}

      {/*<NavLink to={"/"} style={{textDecoration: 'none'}}>*/}
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="/"
          sx={{
            display: { xs: 'none', md: 'flex' },
            textDecoration: 'none',
            color: '#ffffff'
          }}
        >
          {nombre}
        </Typography>
      {/*</NavLink>*/}

      <Box sx={{ flexGrow: 1, justifyContent: 'center', alignContent: 'center', gap: 4, display: { xs: 'none', md: 'flex' } }}>
        <NavLink to={`/category/Notebooks`} style={{textDecoration: 'none'}}>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Notebook
          </Button>
        </NavLink>
        <NavLink to={`/category/Televisores`} style={{textDecoration: 'none'}}>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Televisores
          </Button>
        </NavLink>

        <NavLink to={`/category/Libros`} style={{textDecoration: 'none'}}>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Libros
          </Button>
        </NavLink>
      </Box>
      
      <NavLink to={`/cart`} style={{textDecoration: 'none'}}>
        <Button color='secondary' sx={{display: { xs: 'none', md: 'flex' } }}>
              <CartWidget qtyItems={amountCart}/>
        </Button> 
      </NavLink>
      
      <Box sx={{ justifyContent: 'flex-end', alignContent: 'center', gap: 4, display: { xs: 'none', md: 'flex', paddingLeft: '3rem'} }}>
        <Button
          variant='contained'
          
          sx={{ display: 'flex', backgroundColor: color}}
          startIcon={<AccountCircleIcon />}
        >
        Loguin
        </Button>
      </Box>

    </> ;
}

export default navbardesktop;

