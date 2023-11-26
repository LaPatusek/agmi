import React, { useState } from 'react';

type UseInputProps = {
  validateValue: (value: string) => boolean;
};

type UseInputReturn = {
  value: string;
  isValid: boolean;
  hasError: boolean;
  valueChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  inputBlurHandler: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  reset: () => void;
};

const useInput = ({ validateValue }: UseInputProps): UseInputReturn => {
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const valueIsValid: boolean = validateValue(enteredValue);
  const hasError: boolean = !valueIsValid && isTouched;

  const valueChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
