//@ts-check
import React from 'react'
import { Box, Button, IconButton, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { red } from '@mui/material/colors';
import CartWidget from '../cartwidget';
import { NavLink } from 'react-router-dom';

function navbardesktop({name, logo, amountCart, categories}){
      const color = red[500];
    return <>
        <IconButton sx={{ p: 0, display: { xs: 'none', md: 'flex' } }}>
          <img width={50} height={50} src={logo} alt="Ecommerce" />
        </IconButton>

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
          {name}
        </Typography>

        <IconButton sx={{ p: 0, display: { xs: 'none', md: 'flex' } }}>
          <img width={50} height={50} src={logo} alt="Ecommerce" />
        </IconButton>


      <Box sx={{ flexGrow: 1, justifyContent: 'center', gap: 4, display: { xs: 'none', md: 'flex' }, paddingRight: '8em' }}>

        {categories.length && categories.map(label => (
          <NavLink to={`/category/${label}`} style={{textDecoration: 'none'}} key={label}>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            key={label}
          >
            {label}
          </Button>
        </NavLink>
        ))}

      </Box>
      
      <NavLink to={`/cart`} style={{textDecoration: 'none'}}>
        <Button color='secondary' sx={{display: { xs: 'none', md: 'flex' } }}>
              <CartWidget qtyItems={amountCart}/>
        </Button> 
      </NavLink>
      
      <Box sx={{ justifyContent: 'flex-end', alignContent: 'center', gap: 4, display: { xs: 'none', md: 'flex', paddingLeft: '3rem'} }}>
        <Button
          variant='contained'
          sx={{ display: 'flex', backgroundColor: color, justifyContent: 'right'}}
          startIcon={<AccountCircleIcon />}
        >
        </Button>
        </Box>

    </> ;
}

export default navbardesktop;

