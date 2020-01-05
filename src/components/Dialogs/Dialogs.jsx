import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return(
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          Dimyxh
        </div>
        <div className={s.dialog}>
          Andrey
        </div>
        <div className={s.dialog}>
          Sveta
        </div>
        <div className={s.dialog}>
          Sasha
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>H!</div>
        <div className={s.message}>How is yous</div>
        <div className={s.message}>Yooo</div>
      </div>
    </div>
  );
};

export default Dialogs;