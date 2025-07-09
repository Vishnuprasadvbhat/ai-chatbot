import type { colors } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
  // Define any props if needed
  to: string;
  bg: string;
  text: string;
  textColor : string;
  onClick?: () => void;

}
const Nav = (props:Props) => {
  return (
    <Link to ={props.to} style={background:props.bg, color: props.}></Link>
  )
}

export default Nav