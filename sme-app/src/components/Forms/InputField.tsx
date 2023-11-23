import { FormHelperText, TextField } from '@mui/material';

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
      />
      {error?.message && (
        <FormHelperText
          style={{
            color: '#CF4C4C',
            fontFamily: 'Open Sans',
            fontSize: '10px',
            lineHeight: '12px',
            fontWeight: 500,
            fontStyle: 'normal',
          }}
          error
        >
          {error?.message}
        </FormHelperText>
      )}
    </>
  );
}

export default InputField;
