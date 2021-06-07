import { authAPI, profileAPI } from '../api/api';

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
        ...action.payload,
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
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => (dispatch) => {
  dispatch(toggleIsFetching(true));

  return authAPI.getAuthMe().then((data) => {
    dispatch(toggleIsFetching(false));
    if (data.resultCode === 0) {
      const { id, login, email } = data.data;
      dispatch(setAuthUserData(id, email, login, true));

      profileAPI.getProfile(id).then((data) => {
        dispatch(setUserPhoto(data.photos.small));
      });
    }
  });
};

export const login = (email, password, rememberMe, actions) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      const message =
        data.messages.length > 0 ? data.messages[0] : 'Some error';
      actions.setStatus(message);
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
