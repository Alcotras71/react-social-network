import { authAPI, profileAPI, securityAPI } from '../api/api';

const SET_USER_DATA = 'network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'network/auth/GET_CAPTCHA_URL_SUCCESS';
const SET_USER_PHOTO = 'network/auth/SET_USER_PHOTO';
const TOGGLE_IS_FETCHING = 'network/auth/TOGGLE_IS_FETCHING';

const initialState = {
  userId: null,
  email: null,
  login: null,
  photo: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null, // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));

  const data = await authAPI.getAuthMe();

  dispatch(toggleIsFetching(false));
  if (data.resultCode === 0) {
    const { id, login, email } = data.data;
    dispatch(setAuthUserData(id, email, login, true));

    const dataProfile = await profileAPI.getProfile(id);
    dispatch(setUserPhoto(dataProfile.photos.small));
  }
};

export const login = (email, password, rememberMe, captcha, actions) => async (
  dispatch
) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);

  if (data.resultCode === 0) {
    // success, get auth user data
    dispatch(getAuthUserData());
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    actions.setStatus(message);
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout();

  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
