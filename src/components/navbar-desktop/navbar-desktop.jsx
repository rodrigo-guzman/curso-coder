import React from 'react'
import { Box, Button,  IconButton, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartWidget from '../cartwidget';
import { red } from '@mui/material/colors';

const color = red[500];


function navbardesktop({nombre, logo}){

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
          {nombre}
          </Typography>

          <Box sx={{ flexGrow: 1, justifyContent: 'center', alignContent: 'center', gap: 4, display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Vehículos
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Electrónica
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Libros
            </Button>
          </Box>
          
          <Button color='secondary' sx={{display: { xs: 'none', md: 'flex' } }}>
                <CartWidget qtyItems={4}/>
          </Button> 
          
          <Box sx={{ justifyContent: 'flex-end', alignContent: 'center', gap: 4, display: { xs: 'none', md: 'flex', paddingLeft: '3em'} }}>
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

