import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator, deleteMessageCreator} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
	}
	let deleteMessage = () => {
		props.store.dispatch(deleteMessageCreator());
	}
  let messageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
	}

  return (
    <Dialogs
			sendMessage={sendMessage}
			deleteMessage={deleteMessage}
      updateNewMessageText={messageChange}
      dialogsPage={state.dialogsPage}/>
  );
}

export default DialogsContainer;