import React from "react";
import s from './Users.module.css'
import defaultUserPhoto from '../../assets/img/defaultUserPhoto.jpg'
import {usersAPI} from "../../api/api";

const Users = (props) => {
  return (
    <div>
      {props.users.map(user => {
        return (
          <div className={s.userCard}>
            <div>
              <span><img src={defaultUserPhoto} alt="photo"/></span><br/>
              <span>
                {
                  user.followed === true
                    ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                    : <button onClick={() => props.follow(user.id)}>Follow</button>
                }
              </span>
            </div>
            <div>
              <span>{user.name}</span>
              <span>{user.city},</span>
            </div>
            <div>
              <span>{user.status}</span>
              <span>{user.country}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Users;