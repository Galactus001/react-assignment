import { Box } from '@mui/material';
import React from 'react';

function StepperTitle({ title }: { title: string }) {
  return (
    <Box
      sx={{
        fontSize: '19px',
        width: '100%',
        background: '#601A79',
        px: '15px',
        py: '9px',
        color: 'white',
        borderRadius: '5px',
        ml: '10px',
      }}
    >
      {title}
    </Box>
  );
}

export default StepperTitle;
