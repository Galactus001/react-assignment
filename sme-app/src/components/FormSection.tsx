import React, { useReducer } from 'react';
import Stepper from '@mui/material/Stepper';
import { Button, Step, StepContent, StepLabel, Box } from '@mui/material';
import StepperTitle from './StepperTitle';
import CompanyInfo from './Forms/CompanyInfo';
import ApplicantInfo from './Forms/ApplicantInfo';
import UploadDocs from './Forms/UploadDocs';
import TermsNCond from './Forms/TermsNCond';
import Layover from './Layover';
import StepperContext from './context/stepper-context';
import { saveFormData } from './services';
import { useNavigate } from 'react-router-dom';

const UPDATE_FIELD = 'UPDATE_FIELD';

// Reducer function
const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    default:
      return state;
  }
};

const FormSection = () => {
  const { activeStep } = React.useContext(StepperContext);
  const navigate = useNavigate();

  const [formData, dispatch] = useReducer(formReducer, {
    uen: '',
    companyName: '',
    fullName: '',
    position: '',
    email: '',
    confirmEmail: '',
    phone: '',
    tncAgreed: false,
    error: {},
  });

  const [isCompanyFilled, setIsCompanyFilled] = React.useState<boolean>(false);
  const [isApplicantFilled, setIsApplicantFilled] =
    React.useState<boolean>(false);
  const [isUploadDocsFilled, setIsUploadDocsFilled] =
    React.useState<boolean>(false);

  const onSubmit = async () => {
    // console.log('submitting', formData);
    const { tncAgreed, confirmEmail, ...rest } = formData;
    console.log(rest);
    const res = await saveFormData(rest);
    navigate('/companies');
    console.log(res.data);
  };

  const handleChange = (fieldName: string, fieldValue: string) => {
    dispatch({
      type: UPDATE_FIELD,
      fieldName,
      fieldValue,
    });
  };

  return (
    <Box
      sx={{
        mx: '55px',
        // border: '2px solid black',
        py: '50px',
        px: '30px',
        boxShadow:
          '5px 0 10px -5px rgba(0, 0, 0, 0.2), -5px 0 10px -5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Stepper
        activeStep={activeStep}
        orientation='vertical'
        sx={{
          '& .MuiStepLabel-iconContainer .Mui-completed': {
            color: '#2E7D32',
          },
          '& .MuiStepLabel-iconContainer .Mui-active': {
            color: '#EC0055',
          },
        }}
      >
        <Step expanded={true}>
          <StepLabel>
            <StepperTitle title={'Company Information'} />
          </StepLabel>
          <StepContent sx={{ width: '100% !important', position: 'relative' }}>
            <CompanyInfo
              formData={formData}
              handleChange={handleChange}
              isCompanyFilled={isCompanyFilled}
              setIsCompanyFilled={setIsCompanyFilled}
            />
          </StepContent>
        </Step>
        <Step expanded={true}>
          <StepLabel>
            <StepperTitle title={'Applicant Information'} />
          </StepLabel>
          <StepContent sx={{ width: '100% !important', position: 'relative' }}>
            {activeStep < 1 && <Layover />}
            <ApplicantInfo
              formData={formData}
              handleChange={handleChange}
              isCompanyFilled={isCompanyFilled}
              isApplicantFilled={isApplicantFilled}
              setIsApplicantFilled={setIsApplicantFilled}
            />
          </StepContent>
        </Step>
        <Step expanded={true}>
          <StepLabel>
            <StepperTitle title={'Upload Documents'} />
          </StepLabel>
          <StepContent
            sx={{
              width: '100% !important',
              py: '20px',
              pl: '30px',
              position: 'relative',
            }}
          >
            {activeStep < 2 && <Layover />}
            <UploadDocs
              isCompanyFilled={isCompanyFilled}
              isApplicantFilled={isApplicantFilled}
              isUploadDocsFilled={isUploadDocsFilled}
              setIsUploadDocsFilled={setIsUploadDocsFilled}
            />
          </StepContent>
        </Step>
        <Step expanded={true}>
          <StepLabel>
            <StepperTitle title={'Terms & Conditions'} />
          </StepLabel>
          <StepContent sx={{ width: '100% !important', position: 'relative' }}>
            {activeStep < 3 && <Layover />}
            <TermsNCond
              formData={formData}
              handleChange={handleChange}
              isCompanyFilled={isCompanyFilled}
              isApplicantFilled={isApplicantFilled}
              isUploadDocsFilled={isUploadDocsFilled}
            />
          </StepContent>
        </Step>
      </Stepper>
      <Box sx={{ mt: 10, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          sx={{
            py: 1,
            px: 2,
            fontSize: '14px',
            fontWeight: 600,
            color: 'black',
            background: '#d9d9d9',
          }}
          disabled={activeStep < 3 || !formData.tncAgreed}
          onClick={onSubmit}
        >
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
};

export default FormSection;
