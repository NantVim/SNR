import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setUsers, unfollow} from "../../redux/usersReducer";
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

const UserContainer = connect(mapStateToProps,
  {follow, unfollow, setUsers})(UsersApiContainer);

export default UserContainer;