import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const getUsers = () => {
  return instance.get('users')
    .then(response => {
      return response.data
  })
}

export const getUserProfile = userId => {
  return instance.get('profile/' + userId)
    .then(response => {
      return response.data
    })
}

// export const unfollowAPI = (userID) => {
//   instance.delete('follow/' + userID)
//     .then(response => {
//       if (response.data.resultCode == 0) {
//
//       }
//     })
// }