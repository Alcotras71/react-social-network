import React from 'react';
import { Form, Formik } from 'formik';
import { Input } from '../../common/FormsControls/FormsControls';
import { defaultValidator } from '../../../utils/validators/validators';
import connect from 'react-redux/lib/connect/connect';
import { login, logout } from '../../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import s from '../../common/FormsControls/FormsControls.module.css';

const Login = (props) => {
  const onSubmit = (values, actions) => {
    props.login(values.email, values.password, values.rememberMe, actions);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
      }}
      onSubmit={props.onSubmit}
    >
      {({ status }) => (
        <Form>
          <div>
            <Input
              type={'text'}
              placeholder={'Email'}
              name="email"
              validate={defaultValidator(true)}
            />
          </div>
          <div>
            <Input
              type={'password'}
              placeholder={'Password'}
              name="password"
              validate={defaultValidator(true)}
            />
          </div>
          <div>
            <label>
              <Input type={'checkbox'} name="rememberMe" /> Remember me
            </label>
          </div>
          {status && <div className={s.formSummaryError}>{status}</div>}
          <div>
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
