import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import "./HeroBanner.css"
import HeroBannerImage from '../assets/images/mikementzer.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '200px', xs: '70px' } }} position="relative" p="20px">
      {/* <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography> */}
      <Typography zIndex={-10} marginTop={-15} fontWeight={600} position={'absolute'} color="#FF2625" sx={{ opacity: '0.15', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Search
      </Typography>
      
      <Typography color={'#fff'} fontWeight={600} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Most effective exercises to accomplish your strength and physique goals
      </Typography>
      
    </Box>
  )
}

export default HeroBanner