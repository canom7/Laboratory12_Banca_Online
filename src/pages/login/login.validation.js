import { Validators, createFormValidation } from '@lemoncode/fonk';

//Crear schema de validation
const validationSchema = {
  field: {
    // Mensajes en ingles desde la libreria
    // user: [Validators.required, Validators.email],
    // password: [Validators.required],
    //mensajes en castellano
    user: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
    ],
    password: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
