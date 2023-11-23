import { TextField } from '@mui/material';

function InputField(props: any) {
  const {
    label,
    name,
    placeholder = '',
    errorState,
    error,
    value,
    onChange,
  } = props;

  return (
    <>
      <TextField
        name={name}
        label={label}
        placeholder={placeholder}
        fullWidth
        value={value}
        onChange={onChange}
        error={Boolean(errorState)}
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
        helperText={error?.message || ''}
      />
    </>
  );
}

export default InputField;
