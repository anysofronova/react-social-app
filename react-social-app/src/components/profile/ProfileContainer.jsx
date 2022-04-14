import React, { Component } from "react";
import "./profile.scss";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfile,
  getUserStatus,
  updateUserStatus,
} from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.router.params.userId || this.props.id;
    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    id: state.authReducer.id,
  };
};

export default compose(
  connect(mapStateToProps, { getProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
