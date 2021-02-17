import React from 'react';
import s from './../Aside.module.css';

const Friends = (props) => {
  return (
    <>
      <div className={s.friendsItem}>
        <img src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"/>
        <div>{props.name}</div>
      </div>
    </>
  )
}

export default Friends;