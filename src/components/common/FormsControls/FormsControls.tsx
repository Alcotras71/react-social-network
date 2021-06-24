import React, { FC } from 'react';
import s from './FormsControls.module.css';
import { FieldMetaProps, useField } from 'formik';

type FormControlPropsType = {
  meta: FieldMetaProps<{
    touched: boolean;
    error: string;
  }>;
  children: React.ReactChild;
};

const FormControl: FC<FormControlPropsType> = ({
  meta: { touched, error },
  children,
}) => {
  const hasError = touched && error;
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      {children}
      {hasError ? <span>{error}</span> : null}
    </div>
  );
};

type TextareaType = {
  placeholder: string;
  name: string;
  validate: any;
};

export const Textarea: FC<TextareaType> = (props) => {
  const [field, meta] = useField(props);
  return (
    <FormControl {...props} meta={meta}>
      <textarea {...field} {...props} />
    </FormControl>
  );
};

type InputType = {
  type: string;
  placeholder: string;
  name: string;
  validate: any;
};

export const Input: FC<InputType> = (props) => {
  const [field, meta] = useField(props);
  return (
    <FormControl {...props} meta={meta}>
      <input {...field} {...props} />
    </FormControl>
  );
};

export function createField<FormKeysType extends string>(
  tag: string,
  label: boolean,
  type: string,
  placeholder: string,
  name: FormKeysType,
  validator: any,
  text = ''
) {
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
        <Textarea placeholder={placeholder} name={name} validate={validator} />
      </div>
    );
  }
}
