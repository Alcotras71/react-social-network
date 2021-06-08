import profileReducer, { addPost, removePost } from './profileReducer';

const state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: '35' },
    { id: 2, message: "It's my first post", likeCount: '20' },
    { id: 3, message: 'No, i dont want it', likeCount: '1' },
    { id: 4, message: 'Yo , Claire', likeCount: '5' },
  ],
};

it('Length of posts should be incremented', () => {
  // 1. test data
  const action = addPost('something else');
  // 2. action
  const newState = profileReducer(state, action);
  // 3 expect
  expect(newState.posts.length).toBe(5);
});

it('Message of new post should be correct', () => {
  // 1. test data
  const action = addPost('something else');
  // 2. action
  const newState = profileReducer(state, action);
  // 3 expect
  expect(newState.posts[4].message).toBe('something else');
});

it('After deleting length of messages should be decrement', () => {
  // 1. test data
  const action = removePost();
  // 2. action
  const newState = profileReducer(state, action);
  // 3 expect
  expect(newState.posts.length).toBe(3);
});
