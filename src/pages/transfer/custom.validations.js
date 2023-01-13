const dayValidator = ({ value }) => {
  const val = parseInt(value);
  const succeeded = val >= 1 && val <= 31;
  return {
    succeeded,
    message: succeeded ? '' : 'Valor del campo "Día" debe ser entre 1 y 31',
    type: '',
  };
};

const monthValidator = ({ value }) => {
  const val = parseInt(value);
  const succeeded = val >= 1 && val <= 12;
  return {
    succeeded,
    message: succeeded ? '' : 'Valor del campo "Mes" debe ser entre 1 y 12',
    type: '',
  };
};

const yearValidator = ({ value }) => {
  const succeeded = parseInt(value) >= 2023;
  return {
    succeeded,
    message: succeeded
      ? ''
      : 'Valor del campo "Año" debe ser mayor al año actual (2023)',
    type: '',
  };
};

export { dayValidator, monthValidator, yearValidator };
