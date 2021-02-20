import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>));
  let messagesElements = state.messages.map(m => (<Message key={m.id} message={m.message}/>));
  let newMessageBody = state.newMessageBody;

  // let newMessageElem = React.createRef();
  let onSendMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageText(body);
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
          <button onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;