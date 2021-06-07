export const defaultValidator = (required, maxLength) => (value) => {
  let error;
  if (!value && required) {
    error = 'Required';
  } else if (value.length > maxLength && maxLength) {
    error = `Max length is ${maxLength} symbols`;
  }

  return error;
};
