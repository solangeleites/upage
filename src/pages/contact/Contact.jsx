import React from 'react'
import { HomeStyled, Text } from '../home/HomeStyled'
import { Formulario, ContainerForm } from './ContactStyle'
 import Input from '../../components/UI/Input'
 import TextArea from '../../components/TextArea/TextArea'
import ButtonForm from '../../components/ButtonForm/ButtonForm'

import  {FormInitialValues} from '../../formik/initialValues'
import {FormValidationSchema} from '../../formik/validationSchema'




const Contact = () => {
  return (
    <HomeStyled>
<Text>Dejanos tus datos y nosotros te contactamos </Text>
<ContainerForm
          initialValues={FormInitialValues}
          validationSchema={FormValidationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log({ values });
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
                label="Correo Electronico"
                type="email"
                isError={touched.email && errors.email}
              ></Input>
              <Input
                name="phone"
                label="Telefono"
                type="tel"
                isError={touched.phone && errors.phone}
              ></Input>
              <TextArea
                name="mensaje"
                label="Mensaje"
                isError={touched.mensaje && errors.mensaje}
              />
              <ButtonForm />
            </Formulario>
          )}
        </ContainerForm>




    </HomeStyled>
  )
}

export default Contact