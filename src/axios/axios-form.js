import axios from 'axios';

import { BASE_URL } from '../utils/constants';

export const formPost = async (name, email, phone, msg) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/form`,
      {
        name,
        email,
        phone,
        msg,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.status === 200) {
      console.log('Solicitud completada exitosamente:', response.data);
    } else {
      console.warn('La solicitud tuvo un código de estado inesperado:', response.status);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
