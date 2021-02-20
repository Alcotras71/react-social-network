import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  }
  let MessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <Dialogs
      sendMessage={sendMessage}
      updateNewMessageText={MessageChange}
      dialogsPage={state.dialogsPage}/>
  );
}

export default DialogsContainer;