import axios from 'axios';
import { ProfileType, UserType } from '../types/types';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'fc7ab22e-0755-480d-81fb-2d383c072a4d',
  },
});

type UsersAPIResponseType = {
  totalCount: number;
  error: string;
  items: Array<UserType>;
};

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get<UsersAPIResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

type StandartPropType = {
  data: Object;
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance
      .get<ProfileType>(`profile/${userId}`)
      .then((response) => response.data);
  },
  getStatus(userId: number) {
    return instance
      .get<any>(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status: string) {
    return instance
      .put<StandartPropType>(`profile/status`, { status: status })
      .then((response) => response.data);
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return instance
      .put<any>(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data);
  },
  saveProfile(profile: ProfileType) {
    return instance
      .put<StandartPropType>('profile', profile)
      .then((response) => response.data);
  },
};

export const followAPI = {
  follow: 'follow',

  deleteFollow(userId: number) {
    return instance
      .delete<StandartPropType>(`${this.follow}/${userId}`)
      .then((response) => response.data);
  },

  postFollow(userId: number) {
    return instance
      .post<StandartPropType>(`${this.follow}/${userId}`)
      .then((response) => response.data);
  },
};

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}

type GetAuthMeResponseType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};
type LoginResponseType = {
  data: {
    userId: number;
  };
  resultCode: ResultCodesEnum | ResultCodeForCaptcha;
  messages: Array<string>;
};
type LogoutResponseType = {
  data: Object;
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};

export const authAPI = {
  getAuthMe() {
    return instance
      .get<GetAuthMeResponseType>(`auth/me`)
      .then((response) => response.data);
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: null | string = null
  ) {
    return instance
      .post<LoginResponseType>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((response) => response.data);
  },
  logout() {
    return instance
      .delete<LogoutResponseType>(`auth/login`)
      .then((response) => response.data);
  },
};

type GetCaptchaUrlResponseType = {
  url: string;
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance
      .get<GetCaptchaUrlResponseType>('security/get-captcha-url')
      .then((response) => response.data);
  },
};
