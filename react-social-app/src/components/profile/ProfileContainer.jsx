import React, { Component } from "react";
import "./profile.scss";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

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
    let userId = this.props.router.params.userId;
    if (!userId) userId = 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
