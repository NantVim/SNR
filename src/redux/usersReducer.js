const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
  users: [],
  isFetching: true,
  followingInProgress: false
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
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
      }

    default:
      return state
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

export const toggleIsFollowingProgress = isFetching =>
  ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching});

export default usersReducer;