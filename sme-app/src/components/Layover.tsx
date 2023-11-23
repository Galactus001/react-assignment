import { Box } from '@mui/material';
import React from 'react';

function Layover() {
  return (
    <Box
      sx={{
        background: '#ffffff',
        opacity: 0.5,
        zIndex: 2,
        position: 'absolute',
        inset: 0,
      }}
    ></Box>
  );
}

export default Layover;
