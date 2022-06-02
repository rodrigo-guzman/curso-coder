//@ts-check
import React, { useState } from 'react'
import { Box, Button,  Divider,  Drawer,  IconButton, List, ListItem, ListItemButton, ListItemText, Skeleton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from '../cartwidget';
import { DarkMode, LightMode, Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function NavBarMobile({name, logo, amountCart, categories}){
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        sx={{ display: { xs: 'flex', md: 'none' } }}
        title='icononono'
        onClick={ () => setIsDrawerOpen(!isDrawerOpen) }
      >
        <Menu />
      </IconButton>

      <Drawer
              open={ isDrawerOpen }
              onClose={ () => setIsDrawerOpen(false) }
            >
              <List>
                {
                  categories.length ?
                  categories.map((label) => (
                    <Link
                      to={`category/${label}`}
                      key={label}
                      className='nav-link'
                      onClick={ () => setIsDrawerOpen(false) }
                      style={{textDecoration: 'none'}}
                    >
                      <ListItem>
                        <ListItemButton sx={{ paddingX: '50px' }}>
                          <ListItemText sx={{ textAlign: 'center' }} primary={ label } />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))
                  :
                    <>
                      <ListItem>
                        <ListItemButton sx={{ paddingX: '50px' }}>
                          <Skeleton width='115px' height='40px' />
                        </ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton sx={{ paddingX: '50px' }}>
                          <Skeleton width='115px' height='40px' />
                        </ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton sx={{ paddingX: '50px' }}>
                          <Skeleton width='115px' height='40px' />
                        </ListItemButton>
                      </ListItem>
                    </>
                }
              </List>
              <Divider />
            </Drawer>
  
   
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            color: '#ffffff',
            textDecoration: 'none',
            display: { xs: 'flex', md: 'none' }, 
            flexGrow: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            paddingLeft:'0.5em'
          }}
        >
          {name}
        </Typography>        

        
      <Button color='secondary' sx={{display: { xs: 'flex', md: 'none' }}} >
            <CartWidget qtyItems={amountCart}/>
        </Button>
    </> ;
}

export default NavBarMobile;

