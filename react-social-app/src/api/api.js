import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "3698a276-79d7-4e33-bd6b-193ba8c01549",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((r) => r.data);
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((r) => r.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unFollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  auth() {
    return instance.get(`auth/me`);
  },
};
