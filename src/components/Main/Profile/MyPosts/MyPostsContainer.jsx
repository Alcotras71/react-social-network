import React from "react";
import {
  addPost,
  removePost,
  updateNewPostText,
} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/lib/connect/connect";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPost() {
//       dispatch(addPostAC());
//     },
//     removePost() {
//       dispatch(removePostAC());
//     },
//     updateNewPostText(text) {
//       dispatch(updateNewPostTextActionCreator(text));
//     }
//   }
// }

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  removePost,
  updateNewPostText,
})(MyPosts);

export default MyPostsContainer;
