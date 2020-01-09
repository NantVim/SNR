import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC} from "../../redux/usersReducer";

let mapStateToProps = state => ({users: state.usersPage.users});

let mapDispatchToProps = dispatch => {
  return {
    follow: userID => dispatch(followAC(userID)),
    unfollow: userID => dispatch(unfollowAC(userID))
  }
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;