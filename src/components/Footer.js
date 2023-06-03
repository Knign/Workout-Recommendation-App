import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box width={ '120%'} mt="80px" ml="-10%" mr="-10%" bgcolor="#000">
    {/* <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack> */}
    <Typography color="#fff" variant="h5" sx={{ fontStyle:'Ooen Sans', fontSize: { lg: '28px', xs: '20px' } }} mt="40px" textAlign="center" pt="40px" pb="40px">Made by KW</Typography>
  </Box>
);

export default Footer;