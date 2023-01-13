import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validation';
import { history, routes } from '../../core/router';

//Guardar en un objeto la info del formulario
let login = {
  user: '',
  password: '',
};

//Recoger datos del campo user
//Cuando el usuario pulsa una tecla en el campo user, recuperamos el valor
onUpdateField('user', (event) => {
  const value = event.target.value;
  //Spread operator: Copio el objeto entero y actualizo el campo user con el valor del usuario
  login = {
    ...login,
    user: value,
  };

  formValidation.validateField('user', login.user).then((result) => {
    onSetError('user', result);
  });
});

//Recoger datos del campo password
onUpdateField('password', (event) => {
  const value = event.target.value;
  login = {
    ...login,
    password: value,
  };

  formValidation.validateField('password', login.password).then((result) => {
    onSetError('password', result);
  });
});

const onNavigate = (isValid) => {
  if (isValid) {
    history.push(routes.accountList);
  } else {
    alert('Usuario y/o contraseña no validos');
  }
};

// Click en el boton submit y verificar la info es correcta
onSubmitForm('login-button', () => {
  //Compruebo que todos los datos son correctos
  formValidation.validateForm(login).then((result) => {
    //miro si hay errores
    onSetFormErrors(result);
    //Si no hay error voy a servidor a validar las credenciales
    if (result.succeeded) {
      isValidLogin(login).then((isValid) => {
        onNavigate(isValid);
      });
    }
  });
});
