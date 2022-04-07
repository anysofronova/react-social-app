import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData, toggleIsFetching } from "../../redux/authReducer";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((r) => {
        this.props.toggleIsFetching(false);
        if (r.data.resultCode === 0) {
          let { id, email, login } = r.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.authReducer.login,
    isFetching: state.authReducer.isFetching,
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps, {
  setAuthUserData,
  toggleIsFetching,
})(HeaderContainer);
