import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import './BodyPart.css'

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #dc143c', borderRadius: '5px', width: '270px', height: '280px', cursor: 'pointer', gap: '50px' } : { background: '#000', borderRadius: '5px', width: '270px', height: '280px', cursor: 'pointer', gap: '50px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    
    <img class='icon' src={Icon} alt="dumbbell"/>
    <Typography class='bodyPartTypo'> {item}</Typography>
  </Stack>
);

export default BodyPart;