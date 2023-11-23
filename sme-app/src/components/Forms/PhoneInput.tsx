import { MuiTelInput } from 'mui-tel-input';
import React, { useState } from 'react';

function PhoneInput({ value, onChange }: any) {
  // const [value, setValue] = useState<string>('');
  return (
    <MuiTelInput
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
