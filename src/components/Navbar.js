import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <Stack className='navbar' bgColor={'#000'} fontWeight={600} direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, pt: { sm: '15px', xs: '10px' }, pb: { sm: '20px', xs: '20px' }, pl: { sm: '130px', xs: '20px' }, ml: { sm: '-7.5%', xs: '20px' }, justifyContent: 'none' }} px="20px">
      {/* <Link to="/">
        <img className='imageLogo' src={Logo} alt="logo"/>
      </Link> */}
      <Stack 
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
        
      >
        <Link className='link2' to="/">Home</Link>
        <a className='anchorExercises' href="#exercises">Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar