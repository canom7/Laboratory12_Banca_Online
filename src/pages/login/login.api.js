//Comprovar que los datos con correctos
//tenemos los datos en login.middleware.js pero seria igual si los tubieramos en un servidor
import Axios from 'axios';

//variables de entorno estan en el archivo env
const url = `${process.env.BASE_API_URL}/login`; // mismo que process.env.BASE_API_URL + '/login'

export const isValidLogin = (login) =>
  Axios.post(url, login).then((response) => {
    return response.data;
  });
