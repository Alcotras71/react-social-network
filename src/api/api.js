import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '140cb0a2-b5cf-47ba-a5b1-fce8b9357d2a',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId = 2) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};

export const followAPI = {
  follow: 'follow',

  deleteFollow(userId) {
    return instance.delete(`${this.follow}/${userId}`).then((response) => {
      if (response.data.resultCode === 0) {
        return response.data;
      }
    });
  },

  postFollow(userId) {
    return instance.post(`${this.follow}/${userId}`).then((response) => {
      if (response.data.resultCode === 0) {
        return response.data;
      }
    });
  },
};

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};
