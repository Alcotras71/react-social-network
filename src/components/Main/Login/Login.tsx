import React, { FC } from 'react';
import { Formik, Form, FormikValues } from 'formik';
import { createField } from '../../common/FormsControls/FormsControls';
import { defaultValidator } from '../../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import s from '../../common/FormsControls/FormsControls.module.css';
import { AppStateType } from '../../../redux/redux-store';

type MapStatePropsType = {
  captchaUrl: string | null;
  isAuth: boolean;
};
type MapDispatchPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
    actions: {
      setStatus: (message: string) => void;
    }
  ) => void;
  isAuth: boolean;
  captchaUrl: string | null;
};

export type LoginFormStateType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type LoginFormValuesTypeKeys = Extract<keyof LoginFormStateType, string>;

const Login: FC<MapStatePropsType & MapDispatchPropsType> = ({
  login,
  isAuth,
  captchaUrl,
}) => {
  const onSubmit = (
    values: FormikValues,
    actions: {
      setStatus: (message: string) => void;
    }
  ) => {
    login(
      values.email,
      values.password,
      values.rememberMe,
      values.captcha,
      actions
    );
  };

  if (isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};

type LoginFormPropsType = {
  onSubmit: (
    values: FormikValues,
    actions: {
      setStatus: (message: string) => void;
    }
  ) => void;
  captchaUrl: string | null;
};

const LoginForm: FC<LoginFormPropsType> = ({ onSubmit, captchaUrl }) => {
  const initialValues: LoginFormStateType = {
    email: '',
    password: '',
    rememberMe: false,
    captcha: '',
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ status }) => (
        <Form>
          {createField<LoginFormValuesTypeKeys>(
            'input',
            false,
            'email',
            'Email',
            'email',
            defaultValidator(true, 30)
          )}
          {createField<LoginFormValuesTypeKeys>(
            'input',
            false,
            'password',
            'Password',
            'password',
            defaultValidator(true, 30)
          )}
          {createField<LoginFormValuesTypeKeys>(
            'input',
            true,
            'checkbox',
            '',
            'rememberMe',
            '',
            'Remember me'
          )}

          <div>
            {captchaUrl && <img src={captchaUrl} alt="captcha" />}
            {captchaUrl &&
              createField<LoginFormValuesTypeKeys>(
                'input',
                false,
                'text',
                'Symbols from image',
                'captcha',
                defaultValidator(true, 10)
              )}
          </div>

          {status && <div className={s.formSummaryError}>{status}</div>}
          <div className={s.form__btn}>
            <button type="submit">Login</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
