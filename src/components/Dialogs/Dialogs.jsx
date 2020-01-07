import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogReducer";

const Dialogs = (props) => {

  let newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
    console.log(props.state.dialogsData);
  };

  const updateNewTextMessage = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageActionCreator(text));
  };

  return (
    <div className={s.dialogs}>

      <div className={s.dialogsItems}>
        {props.state.dialogsData.dialogs.map(dialog =>
          <DialogItem name={dialog.name} id={dialog.id}/>
        )}
      </div>

      <div className={s.messages}>
        {props.state.dialogsData.messageData.map(message =>
          <Message message={message.message} id={message.id}/>
        )}

        <textarea
          onChange={updateNewTextMessage}
          ref={newMessageElement}
          value={props.state.dialogsData.newMessageText}
        /><br/>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;