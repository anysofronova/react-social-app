import React, { Component } from "react";
import "./profile.scss";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";

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
    let userId = this.props.router.params.userId || 23291;
    this.props.getProfile(userId);
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

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter
)(ProfileContainer);
