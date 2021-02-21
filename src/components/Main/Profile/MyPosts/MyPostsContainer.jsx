import React from 'react';
import {
  addPostActionCreator,
  removePostActionCreator,
  updateNewPostTextActionCreator
} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/lib/connect/connect";


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost() {
      dispatch(addPostActionCreator());
    },
    removePost() {
      dispatch(removePostActionCreator());
    },
    updateNewPostText(text) {
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;