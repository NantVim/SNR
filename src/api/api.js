import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': '8041a902-a4f3-4cf4-8e86-620c583e07dc'
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
  getUsers() {
    return instance.get('users')
      .then(response => {
        return response.data
      })
  },

  follow(userID) {
    return instance.post('follow/' + userID)
  },

  unfollow(userID) {
    return instance.delete('follow/' + userID)
  },
}

export const headerAPI = {
  login() {
    return instance.get('auth/me')
  }
}

export const getUserProfile = userId => {
  return instance.get('profile/' + userId)
    .then(response => {
      return response.data
    })
}