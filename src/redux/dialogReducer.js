const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEX';

let initialState = {
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'}
  ],
  messageData: [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How is yous!'},
    {id: 3, message: 'Yo!'}
  ],
  newMessageText: ''
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let message = {
        id: (++state.messageData.length),
        message: state.newMessageText
      };

      state.messageData.push(message);
      state.newMessageText = '';
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state;

    default: return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });

export const updateNewMessageActionCreator = (newText) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newText});

export default dialogReducer;