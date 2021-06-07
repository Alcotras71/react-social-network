import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const REMOVE_POST = 'REMOVE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: '35' },
    { id: 2, message: "It's my first post", likeCount: '20' },
    { id: 3, message: 'No, i dont want it', likeCount: '1' },
    { id: 4, message: 'Yo , Claire', likeCount: '5' },
  ],
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const commentsText = action.commentsText;
      return {
        ...state,
        posts: [...state.posts, { id: 5, message: commentsText, likeCount: 0 }],
      };

    case REMOVE_POST: {
      let stateCopy = {
        ...state,
        posts: [...state.posts],
      };
      stateCopy.posts.pop();
      return stateCopy;
    }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const addPost = (commentsText) => ({ type: ADD_POST, commentsText });
export const removePost = () => ({ type: REMOVE_POST });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatus(data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
