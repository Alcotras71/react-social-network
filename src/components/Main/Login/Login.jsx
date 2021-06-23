import React from 'react';
import { Form, Formik } from 'formik';
import { createField } from '../../common/FormsControls/FormsControls';
import { defaultValidator } from '../../../utils/validators/validators';
import { connect } from 'react-redux';
import { login, logout } from '../../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import s from '../../common/FormsControls/FormsControls.module.css';

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (values, actions) => {
    login(values.email, values.password, values.rememberMe, values.captcha, actions);
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

const LoginForm = ({ onSubmit, captchaUrl }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
        captcha: ''
      }}
      onSubmit={onSubmit}
    >
      {({ status }) => (
        <Form>
          {createField( 'input', false, 'email', 'Email', 'email', defaultValidator(true) )}
          {createField( 'input', false, 'password', 'Password', 'password', defaultValidator(true) )}
          {createField( 'input', true, 'checkbox', '', 'rememberMe', '', 'Remember me' )}

          <div>
            {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
            {captchaUrl && createField('input', 'false', 'text', 'Symbols from image', 'captcha', defaultValidator(true), )}
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

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
