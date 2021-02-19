import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogsReducer";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>));
  let messagesElements = props.dialogsPage.messages.map(m => (<Message key={m.id} message={m.message}/>));
  let newMessageBody = props.dialogsPage.newMessageBody;

  // let newMessageElem = React.createRef();

  let sendMessage = () => {
    // props.sendMessage();
    props.dispatch(sendMessageCreator());
  }

  let onMessageChange = (e) => {
    let body = e.target.value;
    // props.updateNewMessageText(text);
    props.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            placeholder='Enter your message'
            onChange={onMessageChange}
            // ref={newMessageElem}
            value={newMessageBody}/>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;