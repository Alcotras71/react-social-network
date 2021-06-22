import { profileAPI } from '../api/api';
import { PhotosType, PostType, ProfileType } from '../types/types';

const ADD_POST = 'network/profile/ADD-POST';
const REMOVE_POST = 'network/profile/REMOVE-POST';
const SET_USER_PROFILE = 'network/profile/SET_USER_PROFILE';
const SET_STATUS = 'network/profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'network/profile/SAVE_PHOTO_SUCCESS';

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 35 },
    { id: 2, message: "It's my first post", likeCount: 20 },
    { id: 3, message: 'No, i dont want it', likeCount: 1 },
    { id: 4, message: 'Yo , Claire', likeCount: 5 },
  ] as Array<PostType>,
  status: '',
  profile: null as ProfileType | null,
  isFetching: false,
};

export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      const commentsText = action.commentsText;
      return {
        ...state,
        posts: [...state.posts, { id: 5, message: commentsText, likeCount: 0 }],
      };

    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }

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

type AddPostActionType = {
  type: typeof ADD_POST;
  commentsText: string;
};
export const addPost = (commentsText: string): AddPostActionType => ({
  type: ADD_POST,
  commentsText,
});

type RemovePostActionType = {
  type: typeof REMOVE_POST;
};
export const removePost = (): RemovePostActionType => ({ type: REMOVE_POST });

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType
};
export const savePhotoSuccess = (
  photos: PhotosType
): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
export const setUserProfile = (
  profile: ProfileType
): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});

export const getStatus = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file);

  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};

export const saveProfile = (profile: ProfileType, actions: any) => async (
  dispatch: any,
  getState: any
) => {
  const userId = getState().auth.userId;
  const data = await profileAPI.saveProfile(profile);

  if (data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    actions.setStatus(message);
    return Promise.reject(message);
  }
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    throw Error(error);
  }
};

export default profileReducer;
