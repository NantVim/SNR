const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
  users: [
    {id: 1, photoUrl: 'https://picsart.com/wp-content/uploads/2019/11/pink-hair-girl-with-beautify-effect.jpg',
      name: 'User_1', followStatus: 'Follow' ,status: '', city: 'City_1', country: 'Country_1'},
    {id: 2, photoUrl: 'https://picsart.com/wp-content/uploads/2019/11/pink-hair-girl-with-beautify-effect.jpg',
      name: 'User_2', followStatus: 'Unfollow', status: '', city: 'City_2', country: 'Country_2'},
    {id: 3, photoUrl: 'https://picsart.com/wp-content/uploads/2019/11/pink-hair-girl-with-beautify-effect.jpg',
      name: 'User_3', followStatus: 'Follow', status: '', city: 'City_3', country: 'Country_3'},
    {id: 4, photoUrl: 'https://picsart.com/wp-content/uploads/2019/11/pink-hair-girl-with-beautify-effect.jpg',
      name: 'User_4', followStatus: 'Unfollow', status: '', city: 'City_4', country: 'Country_4'}
  ]
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

    default: return state
  }
};

export const followAC = (userID) => {
  return {type: FOLLOW, userID}
};

export const unfollowAC = (userID) => {
  return {type: UNFOLLOW, userID}
};

export default usersReducer;