import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg'
          alt='img'>
        </img>
      </div>

      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;