import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import './SearchExercises.css'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);
  
  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center"justifyContent="center" p="20px">
      <Box position="relative" mb="72px">
        <TextField className='textField'
          height="75px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '2px' }, height: '55px', width: { lg: '1000px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '5px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Exercises"
          type="text"
        />
        <Button className="searchBtn" sx={{ bgcolor: '#dc143c', color: '#fff', textTransform: 'none', width: { lg: '170px', xs: '80px' }, height: '55px', position: 'absolute', right: '0px', fontSize: { lg: '25px', xs: '15px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box className="box">
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
      
    </Stack>
  )
}

export default SearchExercises