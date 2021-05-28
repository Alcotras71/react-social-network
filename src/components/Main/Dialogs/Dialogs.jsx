import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  debugger;
  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;

  // let newMessageElem = React.createRef();
  const onSendMessage = () => {
    props.sendMessage();
  };

  const onDeleteMessage = () => {
    props.deleteMessage();
  };

  const onMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div className={s.dialogs__inputs}>
          <div>
            <textarea
              placeholder="Enter your message"
              onChange={onMessageChange}
              // ref={newMessageElem}
              value={newMessageBody}
            />
          </div>
          <button onClick={onSendMessage}>Send</button>
          <button onClick={onDeleteMessage}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
