import React from 'react'
import { InputContainer, Label } from '../input/InputStyled';
import {Error, TextAreaStyle} from './TextAreaStyled';


const TextArea = ({children, label, ...field}) => {


    return (
      <InputContainer>
        <Label htmlFor={label}>{label}
        {children}</Label>
        <TextAreaStyle id={label} {...field} />
      </InputContainer>
    );
  };
  
  export default TextArea;