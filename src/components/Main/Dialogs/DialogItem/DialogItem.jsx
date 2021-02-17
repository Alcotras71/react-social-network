import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.item + ' ' + s.active}>
      <NavLink to={path}>
        <img src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"/>
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogItem;