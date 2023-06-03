import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
      <Typography zIndex={-10} marginTop={-18.5} fontWeight={600} position={'absolute'} color="#FF2625" sx={{ opacity: '0.15', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Videos
      </Typography>
      <Typography sx={{ fontSize: { lg: '45px', xs: '25px' } }} fontWeight={700} color="#fff" mb="33px">
        How to perform {name}
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderRadius: '5px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#fff">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#FF2625">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;