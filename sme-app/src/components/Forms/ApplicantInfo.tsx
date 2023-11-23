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

  const validatePhone = () => {
    const regex = /^\+65\s\d{4}\s?\d{3}\s?\d{1}$/;
    if (!regex.test(formData.phone)) {
      handleChange('error', {
        ...formData.error,
        phone: { message: 'Invalid Phone' },
      });
    } else {
      handleChange('error', {
        ...formData.error,
        phone: undefined,
      });
    }
  };
  useEffect(() => {
    validatePhone();
  }, [formData.phone]);

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
      formData.phone &&
      !formData.error?.phone
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
    formData.error,
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
          errorState={formData.error?.phone}
          error={{ message: formData.error?.phone?.message }}
          onChange={(newVal) => {
            console.log(newVal);
            handleChange('phone', newVal);
          }}
        />
      </Box>
    </>
  );
}

export default ApplicantInfo;
