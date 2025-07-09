import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Logo from './shared/Logo'
const Header = () => {
  return (
    <>
    <AppBar sx={{bgcolor: 'black', position: 'static', boxShadow:'None'}} position='static'>
      <Toolbar sx={{display :'flex'}}> </Toolbar>  
      <Logo/>
    </AppBar>
    </>
  )
}

export default Header