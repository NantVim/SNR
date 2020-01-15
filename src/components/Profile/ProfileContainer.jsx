import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2' + userId).then(response => {
      this.props.setUserProfile(response.data)
    })
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

let mapDispatchToProps = state => ({
  profile: state.profilePage.profile
});

let WithUserUrlDataContainerComponent =  withRouter(ProfileContainer)

export default connect(mapDispatchToProps, {setUserProfile})(WithUserUrlDataContainerComponent);