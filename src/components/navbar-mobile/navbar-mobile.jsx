import React from 'react'
import { Box, Button,  IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from '../cartwidget';

function NavBarMobile({nombre, logo}){
    return <>
     <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
          <MenuIcon />
          </IconButton>
          
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <IconButton sx={{ p: 0 }}>
              <img width={60} height={60} src={logo} alt="Ecommerce" />
            </IconButton>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              ECOMMERCE
            </Typography> 

            <Button color='secondary' sx={{justifyContent: 'right', alignContent: 'right', paddingLeft: '4em'}}>
                <CartWidget qtyItems={4}/>
            </Button>        
          </Box>
    </> ;
}

export default NavBarMobile;

