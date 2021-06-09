import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Formik } from 'formik';
import { defaultValidator } from '../../../../utils/validators/validators';
import { createField } from '../../../common/FormsControls/FormsControls';

const MyPosts = React.memo((props) => {
  const addPost = (values) => {
    props.addPost(values.commentsText);
  };

  const deletePost = () => {
    props.removePost();
  };

  const postsElements = [...props.posts]
    .reverse()
    .map((p) => (
      <Post key={p.id} message={p.message} likeCount={p.likeCount} />
    ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <MyPostsForm onSubmit={addPost} deletePost={deletePost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

const MyPostsForm = (props) => {
  return (
    <Formik
      initialValues={{
        commentsText: '',
      }}
      onSubmit={props.onSubmit}
    >
      <Form>
        {createField( 'textarea', false, '', 'Enter your message', 'commentsText', defaultValidator(true, 10))}
        <div>
          <button className={s.button} type="submit">
            Add post
          </button>
          <button className={s.button} onClick={props.deletePost} type="button">
            delete post
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default MyPosts;
