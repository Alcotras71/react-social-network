import React from 'react';
import s from './FormsControls.module.css';
import { useField } from 'formik';

const FormControl = (props) => {
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      {props.children}
      {hasError ? <span>{props.meta.error}</span> : null}
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

export const Input = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl {...props} meta={meta}>
      <input {...field} {...props} />
    </FormControl>
  );
};
