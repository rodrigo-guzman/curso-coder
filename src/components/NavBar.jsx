/*//@ts-check      ver xq no anda cuando lo pongo*/ 
import React, { useContext } from 'react'
import { AppBar, Container, Toolbar } from '@mui/material';
import logo from '../logo.svg';
import Navbardesktop from './navbar-desktop/navbar-desktop'
import NavBarMobile from './navbar-mobile/navbar-mobile'
import { contextCart } from '../contexts/ContextCart';

export const NavBar = ({nombre}) => {
  const {cart} = useContext(contextCart);

  return (
    <AppBar position='static' elevation={0} background='#0d47a1'>
      <Container maxWidth='xl'>
        <Toolbar>
          {/* DESKTOP */}
          <Navbardesktop nombre = {nombre} logo = {logo} cart = {cart.quantity}/>
         
         {/* MOBILE */}
          <NavBarMobile nombre = {nombre} logo = {logo} cart = {cart.quantity}/>
        </Toolbar>
      </Container>
    </AppBar>
  )
}