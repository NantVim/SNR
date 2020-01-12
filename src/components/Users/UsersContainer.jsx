import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import * as axios from "axios";

class UsersApiContainer extends React.Component{
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data)
    })
  }

  render() {
    return <Users
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />
  }
}

let mapStateToProps = state => ({users: state.usersPage.users});

let mapDispatchToProps = dispatch => {
  return {
    follow: userID => dispatch(followAC(userID)),
    unfollow: userID => dispatch(unfollowAC(userID)),
    setUsers: users => dispatch(setUsersAC(users))
  }
};



const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);

export default UserContainer;