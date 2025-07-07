import React from 'react'
import { Link } from 'react-router-dom'
import {Typography }from '@mui/material'


const Logo = () => {
  return (
    <div
    style={{
      display: 'flex',
      marginRight: 'auto',
      alignItems: 'center',
      gap: "8px",
    }}>
      <Link to={'/'}>
      <img src='openai.png' alt="openai" width={'30px'} height={'30px'} className='Imageinverted'/>
      
      <Typography  sx={{
      display: {md: "block", sm: "none", xs:"none"},
      mr: 'auto', 
      fontWeight: "800", 
      textShadow: '2px 2px 40px  rgb(0, 0, 0)'}}>

      <span style= {{fontSize:'20px', color: 'black'}}>Project GPT</span>
      </Typography>
      </Link>
    </div>
  )
}

export default Logo
