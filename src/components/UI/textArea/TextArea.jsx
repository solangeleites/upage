import React from 'react'
import { InputContainer, Label } from '../input/InputStyled';
import {Error, TextAreaStyle} from './TextAreaStyled';


const TextArea = ({ label, isError, ...field }) => {
    return (
      <InputContainer>
        <Label htmlFor={label}>{label}</Label>
        <TextAreaStyle id={label} {...field} isError={false}  />
         {isError && <Error>{isError}</Error>} 
      </InputContainer>
    );
  };
  
  export default TextArea;