import {
  authAPI,
  profileAPI,
  ResultCodeForCaptcha,
  ResultCodesEnum,
  securityAPI,
} from '../api/api';

const SET_USER_DATA = 'network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'network/auth/GET_CAPTCHA_URL_SUCCESS';
const SET_USER_PHOTO = 'network/auth/SET_USER_PHOTO';
const TOGGLE_IS_FETCHING = 'network/auth/TOGGLE_IS_FETCHING';

export type InitialStateType2 = {
  userId: number | null;
  email: string | null;
  login: string | null;
  photo: null;
  isFetching: boolean;
  isAuth: boolean;
  captchaUrl: string | null;
};

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  photo: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetAuthUserDataActionPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
};

export const getCaptchaUrlSuccess = (
  captchaUrl: string
): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

type SetUserPhotoActionType = {
  type: typeof SET_USER_PHOTO;
  photo: string;
};
export const setUserPhoto = (photo: string): SetUserPhotoActionType => ({
  type: SET_USER_PHOTO,
  photo,
});

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getAuthUserData = () => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));

  const data = await authAPI.getAuthMe();

  dispatch(toggleIsFetching(false));
  if (data.resultCode === ResultCodesEnum.Success) {
    const { id, login, email } = data.data;
    dispatch(setAuthUserData(id, email, login, true));

    const dataProfile = await profileAPI.getProfile(id);
    dispatch(setUserPhoto(dataProfile.photos.small));
  }
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string,
  actions: {
    setStatus: (message: string) => void;
  }
) => async (dispatch: any) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);

  if (data.resultCode === ResultCodesEnum.Success) {
    // success, get auth user data
    dispatch(getAuthUserData());
  } else {
    if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    actions.setStatus(message);
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  const data = await authAPI.logout();

  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
