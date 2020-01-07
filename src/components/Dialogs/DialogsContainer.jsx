import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState();

  const sendMessage = () =>
    props.store.dispatch(addMessageActionCreator());


  const updateNewTextMessage = text =>
    props.store.dispatch(updateNewMessageActionCreator(text));


  return (
    <Dialogs
      dialogs={state.dialogsPage.dialogs}
      messageData={state.dialogsPage.messageData}
      newMessageText={state.dialogsPage.newMessageText}
      sendMessage={sendMessage}
      updateNewTextMessage={updateNewTextMessage}
    />
  );
};

export default DialogsContainer;