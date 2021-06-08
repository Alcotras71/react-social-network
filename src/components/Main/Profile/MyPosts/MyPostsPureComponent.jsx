import React, { PureComponent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

class MyPostsPureComponent extends PureComponent {
  addPost = (values) => {
    this.props.addPost(values.commentsText);
  };

  deletePost = () => {
    this.props.removePost();
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props || nextState !== this.state;
  // }

  render = () => {
    const postsElements = this.props.posts.map((p) => (
      <Post key={p.id} message={p.message} likeCount={p.likeCount} />
    ));

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div></div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    );
  };
}

export default MyPostsPureComponent;
