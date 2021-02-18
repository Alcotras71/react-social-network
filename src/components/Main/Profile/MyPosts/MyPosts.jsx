import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements =
    props.profilePage.posts.map(p => (<Post key={p.id} message={p.message} likeCount={p.likeCount}/>))

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch({ type: 'ADD-POST' });
  }

  let removePost = () => {
    // props.removePost();
    props.dispatch({ type: 'REMOVE-POST' });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange }
                    ref={newPostElement}
                    value={props.profilePage.newPostText} />
        </div>
        <div>
          <button onClick={ addPost }>Add post
          </button>
        </div>
        <div>
          <button onClick={ removePost }>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;