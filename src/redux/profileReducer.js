const ADD_POST = 'ADD-POST';
const REMOVE_POST = 'REMOVE-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likeCount: '35'},
    {id: 2, message: 'It\'s my first post', likeCount: '20'},
    {id: 3, message: 'No, i dont want it', likeCount: '1'},
    {id: 4, message: 'Yo , Claire', likeCount: '5'},
  ],
  newPostText: 'No fish, no meat'
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let text = state.newPostText;
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, {id: 5, message: text, likeCount: 0}]
      }
    case REMOVE_POST: {
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.pop();
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:
      return  {
        ...state,
        newPostText: action.newText
      }
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const removePostActionCreator = () => {
  return {
    type: REMOVE_POST
  }
}
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export default profileReducer;