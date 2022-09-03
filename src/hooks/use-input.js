import { useState } from "react";

const useInput = (initialState, validationRule) => {
  const [value, setValue] = useState(initialState);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validationRule(value) || false;
  const inputIsInvalid = !valueIsValid && isTouched;

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue(initialState);
    setIsTouched(false);
  };

  return [{ value, onChange, onBlur }, { valueIsValid, inputIsInvalid }, reset];
};

export default useInput;
