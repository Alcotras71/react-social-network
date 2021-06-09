import React from 'react';
import { Form, Formik } from 'formik';
import { createField } from '../../common/FormsControls/FormsControls';
import { defaultValidator } from '../../../utils/validators/validators';
import connect from 'react-redux/lib/connect/connect';
import { login, logout } from '../../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import s from '../../common/FormsControls/FormsControls.module.css';

const Login = ({ login, isAuth }) => {
  const onSubmit = (values, actions) => {
    login(values.email, values.password, values.rememberMe, actions);
  };

  if (isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
      }}
      onSubmit={onSubmit}
    >
      {({ status }) => (
        <Form>
          {createField( 'input', false, 'email', 'Email', 'email', defaultValidator(true) )}
          {createField( 'input', false, 'password', 'Password', 'password', defaultValidator(true) )}
          {createField( 'input', true, 'checkbox', '', 'rememberMe', '', 'Remember me' )}
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
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
