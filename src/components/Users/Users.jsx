import React from "react";
import s from './Users.module.css'
import defaultUserPhoto from '../../assets/img/defaultUserPhoto.jpg'
import {unfollowAPI} from "../../api/api";
import axios from "axios";

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
                    ? <button onClick={() => {

                        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + user.id, {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '8041a902-a4f3-4cf4-8e86-620c583e07dc'
                        }
                      }).then(response => {
                        if (response.data.resultCode == 0) {
                          props.unfollow(user.id)
                        }
                      })

                    }}>Unfollow</button>
                    : <button onClick={() => {

                      axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + user.id,{}, {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '8041a902-a4f3-4cf4-8e86-620c583e07dc'
                        }
                      }).then(response => {
                        if (response.data.resultCode == 0) {
                          props.follow(user.id)
                        }
                      })

                    }}>Follow</button>
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
}

export default Users;