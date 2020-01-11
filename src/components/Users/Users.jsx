import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
import defaultUserPhoto from '../../assets/img/defaultUserPhoto.jpg'

class Users extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data)
    })
  }

  render() {
    return(
      <div>
        {this.props.users.map(user => {
        return (
          <div className={s.userCard}>
            <div>
              <span><img src={defaultUserPhoto} alt="photo"/></span><br/>
              <span>
                {
                  user.followStatus === 'Follow'
                    ? <button onClick={() => this.props.unfollow(user.id)}>Follow</button>
                    : <button onClick={() => this.props.follow(user.id)}>Unfollow</button>
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
}

export default Users;