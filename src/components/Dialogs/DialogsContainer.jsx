import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapDialogState = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messageData: state.dialogsPage.messageData,
    newMessageText: state.dialogsPage.newMessageText
  }
};

let mapDispatchToProps = (dispatch) => {
  return{
    sendMessage: () => dispatch(addMessageActionCreator()),
    updateNewTextMessage: text => dispatch(updateNewMessageActionCreator(text))
  }
};

const DialogsContainer = connect(mapDialogState, mapDispatchToProps)(Dialogs);

export default DialogsContainer;