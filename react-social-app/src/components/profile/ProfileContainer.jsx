import React, { Component } from "react";
import "./profile.scss";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile, toggleIsFetching } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PreLoader from "../UI/PreLoader";

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
    this.props.toggleIsFetching(true);
    let userId = this.props.router.params.userId;
    if (!userId) userId = 23291;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((r) => {
        this.props.toggleIsFetching(false);
        this.props.setUserProfile(r.data);
      });
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <PreLoader /> : null}
        <Profile {...this.props} />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    isFetching: state.profileReducer.isFetching,
  };
};

export default connect(mapStateToProps, { setUserProfile, toggleIsFetching })(
  withRouter(ProfileContainer)
);
