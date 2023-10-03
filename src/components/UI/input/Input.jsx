import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { InputContainer, Label, InputStyle, Error } from './InputStyled'

const Input = ({name, label, type, isError,...field}) => {
  return (
    <InputContainer>
      <Label htmlFor={label}>{label}</Label>
      <Field
        name={name}
        type={type}
        as={InputStyle}
        id={label}
        isError={false}
      />
      <ErrorMessage name={name} component={Error} />
    </InputContainer>
  )
}

export default Input