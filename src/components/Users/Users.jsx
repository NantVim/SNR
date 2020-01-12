import React from "react";
import s from './Users.module.css'
import defaultUserPhoto from '../../assets/img/defaultUserPhoto.jpg'

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
                  user.followStatus === 'Follow'
                    ? <button onClick={() => props.unfollow(user.id)}>Follow</button>
                    : <button onClick={() => props.follow(user.id)}>Unfollow</button>
                } </span>
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
}

export default Users;