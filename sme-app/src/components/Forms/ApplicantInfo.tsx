import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import InputField from './InputField';
import PhoneInput from './PhoneInput';
import StepperContext from '../context/stepper-context';

function ApplicantInfo({
  formData,
  handleChange,
  isCompanyFilled,
  isApplicantFilled,
  setIsApplicantFilled,
}: any) {
  const { activeStep, setActiveStep } = React.useContext(StepperContext);

  useEffect(() => {
    if (activeStep === 0) {
      return;
    }
    if (
      isCompanyFilled &&
      formData.fullName &&
      formData.position &&
      formData.email &&
      formData.confirmEmail &&
      formData.phone
    ) {
      if (activeStep > 2) return;
      setActiveStep(2);
      setIsApplicantFilled(true);
    } else {
      setActiveStep(1);
      setIsApplicantFilled(false);
    }
  }, [
    formData.fullName,
    formData.position,
    formData.email,
    formData.confirmEmail,
    formData.phone,
    isCompanyFilled,
  ]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '80px',
          my: '20px',
          pl: '10px',
        }}
      >
        <InputField
          label='Full Name'
          placeholder='Full Name'
          name='fullName'
          value={formData.fullName}
          onChange={(e) => {
            handleChange('fullName', e.target.value);
          }}
        />
        <InputField
          label='Position within company'
          placeholder='Position within company'
          name='position'
          value={formData.position}
          onChange={(e) => {
            handleChange('position', e.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '80px',
          my: '20px',
          pl: '10px',
        }}
      >
        <InputField
          label='Email Address'
          name='email'
          value={formData.email}
          onChange={(e) => {
            handleChange('email', e.target.value);
          }}
        />
        <InputField
          label='Re-enter Email Address'
          name='confirmEmail'
          value={formData.confirmEmail}
          onChange={(e) => {
            handleChange('confirmEmail', e.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          //   gap: '80px',
          my: '20px',
          pl: '10px',
          width: 'calc(50% - 35px)',
        }}
      >
        <PhoneInput
          value={formData.phone}
          onChange={(newVal) => {
            handleChange('phone', newVal);
          }}
        />
      </Box>
    </>
  );
}

export default ApplicantInfo;
