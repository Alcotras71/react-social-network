import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let onRemovePost = () => {
    props.removePost();
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
        <div>
          <button onClick={onRemovePost}>Remove</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
