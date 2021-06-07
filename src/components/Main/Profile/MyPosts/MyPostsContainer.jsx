import { addPost, removePost } from '../../../../redux/profileReducer';
import MyPosts from './MyPosts';
import connect from 'react-redux/lib/connect/connect';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  removePost,
})(MyPosts);

export default MyPostsContainer;
