import React from 'react';
import { Box } from '@mui/material';

export default function HouseBookImg({ img, id }) {
  return (
    <Box
      component="img"
      src={img}
      alt={id}
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: 3,
      }}
    />
  );
}
