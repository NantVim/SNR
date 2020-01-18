import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setUsers, unfollow} from "../../redux/usersReducer";
import {getUsers} from "../../api/api";

class UsersApiContainer extends React.Component{
  componentDidMount() {
    getUsers().then(data => {
      this.props.setUsers(data)
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
  {follow, unfollow, setUsers,})(UsersApiContainer);

export default UserContainer;