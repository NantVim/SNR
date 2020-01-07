import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  const sendMessage = () => props.sendMessage();

  const updateNewTextMessage = (e) => {
    let text = e.target.value;
    props.updateNewTextMessage(text)
  };

  return (
    <div className={s.dialogs}>

      <div className={s.dialogsItems}>
        {props.dialogs.map(dialog =>
          <DialogItem name={dialog.name} id={dialog.id}/>
        )}
      </div>

      <div className={s.messages}>
        {props.messageData.map(message =>
          <Message message={message.message} id={message.id}/>
        )}

        <textarea
          onChange={updateNewTextMessage}
          value={props.newMessageText}
        /><br/>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
};

export default Dialogs;