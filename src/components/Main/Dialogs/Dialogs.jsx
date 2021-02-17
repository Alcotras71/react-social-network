import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>));
  let messagesElements = props.dialogsPage.messages.map(m => (<Message key={m.id} message={m.message}/>));

  let newMessageElem = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElem.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea
          onChange={onMessageChange}
          ref={newMessageElem}
          value={props.dialogsPage.newMessageText}/>
        <button onClick={addMessage}>Add</button>
      </div>
    </div>
  );
}

export default Dialogs;