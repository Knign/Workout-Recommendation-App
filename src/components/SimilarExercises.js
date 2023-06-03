import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '200px', xs: '0px' } }}>
    <Typography zIndex={-10} marginTop={-19} fontWeight={600} position={'absolute'} color="#FF2625" sx={{ opacity: '0.15', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Target Muscle
    </Typography>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#fff" mb="35px">
      Similar exercises based on target muscle
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>

    <Typography zIndex={-10} marginTop={-6.5} fontWeight={600} position={'absolute'} color="#FF2625" sx={{ opacity: '0.15', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Equipment
    </Typography>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#fff" mb="35px">
      Similar exercises based on equipment
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
);

export default SimilarExercises;