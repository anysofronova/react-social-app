import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getLogOut } from "../../redux/authReducer";

class HeaderContainer extends Component {
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

export default connect(mapStateToProps, { getLogOut })(HeaderContainer);
