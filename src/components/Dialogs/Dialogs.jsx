import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>

      <div className={s.dialogsItems}>
        {props.dialogsData.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
      </div>

      <div className={s.messages}>
        {props.dialogsData.messageData.map(message => <Message message={message.message} id={message.id}/>)}
      </div>

    </div>
  );
};

export default Dialogs;