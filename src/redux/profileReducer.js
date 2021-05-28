const ADD_POST = "ADD-POST";
const REMOVE_POST = "REMOVE-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: "35" },
    { id: 2, message: "It's my first post", likeCount: "20" },
    { id: 3, message: "No, i dont want it", likeCount: "1" },
    { id: 4, message: "Yo , Claire", likeCount: "5" },
  ],
  newPostText: "No fish, no meat",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          { id: 5, message: state.newPostText, likeCount: 0 },
        ],
      };

    case REMOVE_POST: {
      let stateCopy = {
        ...state,
        posts: [...state.posts],
      };
      stateCopy.posts.pop();
      return stateCopy;
    }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const removePost = () => ({ type: REMOVE_POST });
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
});

export default profileReducer;
