import React from 'react';
import {
  addPostActionCreator,
  removePostActionCreator,
  updateNewPostTextActionCreator
} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>{
      (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }
        let removePost = () => {
          store.dispatch(removePostActionCreator());
        }
        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        }

        return (<MyPosts
          updateNewPostText={onPostChange} addPost={addPost}
          removePost={removePost}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}/>)
      }
    }</StoreContext.Consumer>
  );
}

export default MyPostsContainer;