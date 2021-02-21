import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator, deleteMessageCreator} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>{
      (store) => {
        let state = store.getState();

        let sendMessage = () => {
          store.dispatch(sendMessageCreator());
        }
        let deleteMessage = () => {
          store.dispatch(deleteMessageCreator());
        }
        let messageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body))
        }

        return (<Dialogs
            sendMessage={sendMessage} deleteMessage={deleteMessage}
            updateNewMessageText={messageChange}
            dialogsPage={state.dialogsPage}/>
        )
      }
    }</StoreContext.Consumer>
  );
}

export default DialogsContainer;