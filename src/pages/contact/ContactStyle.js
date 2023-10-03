import styled from "styled-components";
import { Formik, Form } from "formik";


export const Formulario = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 600px;
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 30px;
`;
export const ContainerForm = styled(Formik)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;