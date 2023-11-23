import { MuiTelInput } from 'mui-tel-input';
import React, { useState } from 'react';
import StepperContext from '../context/stepper-context';

function PhoneInput({ value, onChange, error, errorState }: any) {
  const { activeStep } = React.useContext(StepperContext);
  console.log(value);
  return (
    <MuiTelInput
      error={Boolean(errorState) && activeStep === 1 && value !== ''}
      helperText={value !== '' ? error?.message : ''}
      value={value}
      onChange={onChange}
      focusOnSelectCountry
      label='Mobile Number'
      fullWidth
      defaultCountry='SG'
      onlyCountries={['SG']}
      sx={{
        '& .MuiInputLabel-root': {
          fontSize: '18px',
          top: '3px',
        },
        '& .MuiInputLabel-shrink': {
          fontSize: '16px',
          top: '0px',
        },
      }}
      inputProps={{
        style: {
          fontSize: '18px',
          height: '30px',
        },
      }}
    />
  );
}

export default PhoneInput;
