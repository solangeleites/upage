import { Formik, Form } from "formik";
import styled from "styled-components";


export const ContainerForm = styled(Formik)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Formulario = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 600px;
`;