import React from 'react';
import { ButtonStyle } from './ButtonFormStyled';

const ButtonForm = ({ onSubmit }) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit();
  // };

  return <ButtonStyle type="submit">Enviar</ButtonStyle>;
};

export default ButtonForm;
