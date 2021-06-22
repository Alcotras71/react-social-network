import { followAPI, usersAPI } from '../api/api';
import { UserType } from '../types/types';
import { updateObjectInArray } from '../utils/helpers/object-helpers';

const FOLLOW = 'network/users/FOLLOW';
const UNFOLLOW = 'network/users/UNFOLLOW';
const SET_USERS = 'network/users/SET_USERS';
const SET_CURRENT_PAGE = 'network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS =
  'network/users/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users id
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

type FollowSuccessActionType = {
  type: typeof FOLLOW;
  userId: number;
};
export const followSuccess = (userId: number): FollowSuccessActionType => ({
  type: FOLLOW,
  userId,
});

type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({
  type: UNFOLLOW,
  userId,
});

type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({
  type: SET_USERS,
  users,
});

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currPage: number;
};
export const setCurrentPage = (currPage: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currPage,
});

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalCount: number;
};
export const setTotalUsersCount = (
  totalCount: number
): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
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

type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};
export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number
): ToggleFollowingProgressActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page: number, pageSize: number) => async (
  dispatch: any
) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));

  const data = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleFollowingProgress(true, userId));

  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId: number) => (dispatch: any) => {
  followUnfollowFlow(
    dispatch,
    userId,
    followAPI.postFollow.bind(followAPI),
    followSuccess
  );
};

export const unfollow = (userId: number) => async (dispatch: any) => {
  followUnfollowFlow(
    dispatch,
    userId,
    followAPI.deleteFollow.bind(followAPI),
    unfollowSuccess
  );
};

export default usersReducer;
