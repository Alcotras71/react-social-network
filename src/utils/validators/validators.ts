export type FieldValidatorType = (value: string) => string | undefined;

export const defaultValidator = (
  required: boolean,
  maxLength: number
): FieldValidatorType => (value: string): string | undefined => {
  let error;
  if (!value && required) {
    error = 'Required';
  } else if (value.length > maxLength && maxLength) {
    error = `Max length is ${maxLength} symbols`;
  }

  return error;
};
