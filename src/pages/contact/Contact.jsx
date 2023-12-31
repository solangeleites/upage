import React from 'react';
import { HomeStyled, Text } from '../home/HomeStyled';
import { ContainerForm, Formulario } from './ContactStyle';
import Input from '../../components/UI/input/Input';
import ButtonForm from '../../components/UI/buttonForm/ButtonForm';
import { FormInitialValues } from '../../formik/initialValues';
import { FormValidationSchema } from '../../formik/validationSchema';
import TextArea from '../../components/UI/textArea/TextArea';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import { ErrorMessage } from 'formik';

const Contact = () => {
  const renderError = (message) => <p>{message}</p>;

  return (
    <HomeStyled>
      <Text>Dejanos tus datos y nosotros te contactamos </Text>

      <ContainerForm
        initialValues={FormInitialValues}
        validationSchema={FormValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          await onSubmit(values);
          resetForm();
        }}
      >
        {({ touched, errors }) => (
          <Formulario>
            <Input
              name="name"
              label="Nombre"
              type="text"
              isError={touched.name && errors.name}
            ></Input>
            <Input
              name="email"
              label="Email"
              type="email"
              isError={touched.email && errors.email}
            ></Input>
            <Input
              name="phone"
              label="Teléfono"
              type="tel"
              isError={touched.phone && errors.phone}
            ></Input>
            <TextArea
            name="mensaje"
            label="Mensaje"
            type="text"
            >
              
              </TextArea>
            
            <ButtonForm />
          </Formulario>
        )}
      </ContainerForm>
    </HomeStyled>
  );
};

export default Contact;
