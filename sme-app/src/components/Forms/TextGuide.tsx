import { Box, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

import React from 'react';

function TextGuide({ text }: { text: string }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <DoneIcon sx={{ mr: 2, color: '#666666', fontSize: '26px' }} />
      <Typography sx={{ color: '#666666', fontSize: '18px' }}>
        {text}
      </Typography>
    </Box>
  );
}

export default TextGuide;
