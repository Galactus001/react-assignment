import { Box, Checkbox, Typography } from '@mui/material';
import React from 'react';
import TextGuide from './TextGuide';

function TermsNCond({ formData, handleChange }: any) {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: '30px', pt: '30px' }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          checked={formData?.tncAgreed || false}
          onChange={(e) => {
            handleChange('tncAgreed', e.target.checked);
          }}
        />
        <Typography>
          {`By ticking, you are confirming that you have understood and are agreeing to the details mentioned:`}
        </Typography>
      </Box>
      <Box
        sx={{
          pl: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        <TextGuide
          text={`I confirm that I am the authorized person to upload bank statements on behalf of my company`}
        />
        <TextGuide
          text={`I assure you that uploaded bank statements and
         provided company information match and are of the 
         same company, if there is a mismatch then my report will not be generated`}
        />
        <TextGuide
          text={`I understand that this is a general report based on the bank statements and Credilinq is not providing a solution or guiding me for my business growth`}
        />
        <TextGuide
          text={`I have read and understand the 
        Terms & Conditions`}
        />
      </Box>
    </Box>
  );
}

export default TermsNCond;
