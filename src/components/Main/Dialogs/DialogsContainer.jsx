import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator, deleteMessageCreator} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage() {
      dispatch(sendMessageCreator());
    },
    deleteMessage() {
      dispatch(deleteMessageCreator());
    },
    updateNewMessageText(body) {
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;