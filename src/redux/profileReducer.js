const ADD_POST ='ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postData: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It s my first post', likesCount: 11},
    {id: 3, message: 'Hi, how are you?', likesCount: 12},
    {id: 4, message: 'It s my first post', likesCount: 11}
  ],
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: (++state.postData.length),
        message: state.newPostText,
        likesCount: 0
      };

      state.postData.push(post);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default: return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (newText) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText});

export default profileReducer;