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

const Contact = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(BASE_URL, values);
      console.log('Respuesta del backend', response.data);
      resetForm();
    } catch (error) {
      console.error(('Error al enviar datos al backend: ', error));
    }
  };

  return (
    <HomeStyled>
      <Text>Dejanos tus datos y nosotros te contactamos </Text>

      <ContainerForm
        initialValues={FormInitialValues}
        validationSchema={FormValidationSchema}
        onSubmit={handleSubmit}  >
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
              name="msg"
              label="Mensaje"
              isError={touched.msg && errors.msg}
            />
            <ButtonForm />
          </Formulario>
        )}
      </ContainerForm>
    </HomeStyled>
  );
};

export default Contact;
