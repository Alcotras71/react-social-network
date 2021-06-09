import React from 'react';
import s from './FormsControls.module.css';
import { useField } from 'formik';

const FormControl = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      {children}
      {hasError ? <span>{error}</span> : null}
    </div>
  );
};

export const Textarea = (props) => {
  const [field, meta] = useField(props);
  return (
    <FormControl {...props} meta={meta}>
      <textarea {...field} {...props} />
    </FormControl>
  );
};

export const Input = (props) => {
  const [field, meta] = useField(props);
  return (
    <FormControl {...props} meta={meta}>
      <input {...field} {...props} />
    </FormControl>
  );
};

export const createField = ( tag, label, type, placeholder, name, validator, text = '' ) => {
  if (tag === 'input') {
    return label ? (
      <label>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          validate={validator}
        />
        {text}
      </label>
    ) : (
      <div>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          validate={validator}
        />
        {text}
      </div>
    );
  } else if ('textarea') {
    return (
      <div>
        <Textarea
          placeholder={placeholder}
          name={name}
          validate={validator}
        />
      </div>
    );
  }
};
