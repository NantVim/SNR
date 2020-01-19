const LOGIN = 'LOGIN';

let initialState = {
  isAuth: false,
  login: 'login',
}

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state;

    default: return state;
  }
}

