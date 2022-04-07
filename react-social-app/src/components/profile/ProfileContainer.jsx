import React, { Component } from "react";
import "./profile.scss";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";

class ProfileAPIContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((r) => {
        this.props.setUserProfile(r.data);
      });
  }
  render() {
    return <Profile {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
  };
};

const ProfileContainer = connect(mapStateToProps, {
  setUserProfile,
})(ProfileAPIContainer);

export default ProfileContainer;
