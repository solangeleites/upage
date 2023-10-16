import * as Yup from 'yup';
const phoneRegex = /\d{10}$/;

export const FormValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string().email('Correo inválido').required('Campo requerido'),
  phone: Yup.string()
    .matches(phoneRegex, 'Celular inválido')
    .required('Campo requerido'),
  mensaje: Yup.string().required('Campo requerido'),
});