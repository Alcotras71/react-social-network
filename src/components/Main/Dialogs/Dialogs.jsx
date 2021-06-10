import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Form, Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import { createField } from '../../common/FormsControls/FormsControls';
import { defaultValidator } from '../../../utils/validators/validators';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  const addNewMessage = (values) => {
    props.sendMessage(values.messageText);
  };

  const deleteMessage = () => {
    props.deleteMessage();
  };

  if (!props.isAuth) return <Redirect to={'/login'} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm
          onSubmit={addNewMessage}
          deleteMessage={deleteMessage}
        />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <Formik
      initialValues={{
        messageText: '',
      }}
      onSubmit={props.onSubmit}
    >
      <Form className={s.dialogs__inputs}>
        {createField( 'textarea', false, '', 'Enter your message', 'messageText', defaultValidator(true, 50))}
        <button type={'submit'}>Send</button>
        <button type={'button'} onClick={props.deleteMessage}>
          Delete
        </button>
      </Form>
    </Formik>
  );
};

export default Dialogs;
