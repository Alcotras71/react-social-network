import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator, deleteMessageCreator} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer> {
      (store) => {
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
        return(
          <Dialogs
            sendMessage={sendMessage} deleteMessage={deleteMessage}
            updateNewMessageText={messageChange}
            dialogsPage={state.dialogsPage}/>
        )
      }
    }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;