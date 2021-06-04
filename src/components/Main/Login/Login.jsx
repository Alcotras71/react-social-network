import React from 'react';
import { Field, Form, Formik } from 'formik';

const LoginForm = (props) => {
  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
        remember: false,
      }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <Field type={'text'} placeholder={'Login'} name="login" />
        </div>
        <div>
          <Field type={'password'} placeholder={'Password'} name="password" />
        </div>
        <div>
          <label>
            <Field type={'checkbox'} name="remember" /> Remember me
          </label>
        </div>
        <div>
          <button>Login</button>
        </div>
      </Form>
    </Formik>
  );
};

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
