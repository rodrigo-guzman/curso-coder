import React from 'react'
import { AppBar, Container, Toolbar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../logo.svg';
import Navbardesktop from './navbar-desktop/navbar-desktop'
import NavBarMobile from './navbar-mobile/navbar-mobile'

export const NavBar = ({nombre}) => {
  return (
    <AppBar position='static' elevation={0} background='#0d47a1'>
      <Container maxWidth='xl'>
        <Toolbar>
          {/* DESKTOP */}
          <Navbardesktop nombre = {nombre} logo = {logo}/>
         
         {/* MOBILE */}
          <NavBarMobile nombre = {nombre} logo = {logo}/>
        </Toolbar>
      </Container>
    </AppBar>
  )
}