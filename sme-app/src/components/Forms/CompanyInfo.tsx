import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import InputField from './InputField';
import StepperContext from '../context/stepper-context';

function CompanyInfo({
  formData,
  handleChange,
  // isCompanyFilled,
  setIsCompanyFilled,
}: any) {
  const { activeStep, setActiveStep } = React.useContext(StepperContext);

  useEffect(() => {
    if (formData.uen && formData.companyName) {
      if (activeStep > 1) return;
      setActiveStep(1);
      setIsCompanyFilled(true);
    } else {
      setActiveStep(0);
      setIsCompanyFilled(false);
    }
  }, [formData.uen, formData.companyName]);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '80px',
        my: '20px',
        pl: '10px',
      }}
    >
      <InputField
        label='Company UEN'
        placeholder='Enter your company UEN'
        name='uen'
        value={formData.uen}
        onChange={(e) => {
          handleChange('uen', e.target.value);
        }}
      />
      <InputField
        label='Company Name'
        placeholder='Enter your company name'
        name='companyName'
        value={formData.companyName}
        onChange={(e) => {
          handleChange('companyName', e.target.value);
        }}
      />
    </Box>
  );
}

export default CompanyInfo;
