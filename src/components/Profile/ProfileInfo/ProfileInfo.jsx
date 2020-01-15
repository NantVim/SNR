import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {

    return <div>.........</div>
  }

  return (
    <div>
      <div>
        <img
          src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg'
          alt='img'>
        </img>
      </div>

      <div className={s.descriptionBlock}>
        <div>
          <img src={props.profile.photos.large} alt="avatar"/>
        </div>
        <div>
          <span>{props.profile.aboutMe}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;