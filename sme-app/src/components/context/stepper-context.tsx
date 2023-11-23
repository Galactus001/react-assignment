import React, { Context } from 'react';

interface StepperContextProps {
  activeStep: number;
  navigateNext: () => void;
  navigateBack: () => void;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

interface ProvideProps {
  children: React.ReactNode;
}

const intialContext: StepperContextProps = {
  activeStep: 0,
  navigateNext: () => undefined,
  navigateBack: () => undefined,
  setActiveStep: () => undefined,
};

const StepperContext: Context<StepperContextProps> =
  React.createContext(intialContext);

export const StepperContextProvider = (props: ProvideProps) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const navigateNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const navigateBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <StepperContext.Provider
      value={{ activeStep, navigateNext, navigateBack, setActiveStep }}
    >
      {props.children}
    </StepperContext.Provider>
  );
};

export default StepperContext;
