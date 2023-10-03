import React from 'react';
import { Error, TextAreaStyle } from './TextAreaStyled';
import { InputContainer, Label } from '../UI/InputStyled';
import { Field } from 'formik';



const TextArea = ({ label, isError, ...field }) => {
  console.log("isError:", isError)
  return (
    <InputContainer>
      <Label htmlFor={label}>{label}</Label>
      <TextAreaStyle id={label} {...field} error={isError}  />


      <Field
        name={name}
        type={type}
        as={TextAreaStyle}
        id={label}
        error={isError}
      />
       {isError && <Error>{isError}</Error>} 
    </InputContainer>
  );
};

export default TextArea;