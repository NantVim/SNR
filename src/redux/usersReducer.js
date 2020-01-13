const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return ({...u, followStatus: 'Follow'});
          }
          return u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return ({...u, followStatus: 'Unfollow'});
          }
          return u;
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: [...action.users.items]
      }

    default: return state
  }
};

export const follow = (userID) => {
  return {type: FOLLOW, userID}
};

export const unfollow = (userID) => {
  return {type: UNFOLLOW, userID}
};

export const setUsers = users => {
  return {type: SET_USERS, users}
}

export default usersReducer;