const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  userId: null,
  email: null,
  login: null,
  photo: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    case SET_USER_PHOTO:
      return {
        ...state,
        photo: action.photo,
      };

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    default:
      return state;
  }
};

export const setUserPhoto = (photo) => ({
  type: SET_USER_PHOTO,
  photo,
});

export const setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export default authReducer;
