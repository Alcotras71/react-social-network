import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"/>
      <span>{props.message}</span>
      <div>
        <span>likes</span> <span>{props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;