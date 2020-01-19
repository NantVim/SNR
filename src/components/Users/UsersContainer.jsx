import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, getUsersThunkCreator, unfollow} from "../../redux/usersReducer";

class UsersApiContainer extends React.Component{
  componentDidMount() {
    this.props.getUsersThunkCreator();
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
  {follow, unfollow, getUsersThunkCreator})(UsersApiContainer);

export default UserContainer;