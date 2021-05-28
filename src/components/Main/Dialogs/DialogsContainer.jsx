import React from "react";
import {
  sendMessage,
  updateNewMessageBody,
  deleteMessage,
} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  sendMessage: sendMessage,
  deleteMessage: deleteMessage,
  updateNewMessageBody: updateNewMessageBody,
})(Dialogs);

export default DialogsContainer;
