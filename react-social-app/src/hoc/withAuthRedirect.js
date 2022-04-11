import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate replace to="/login" />;
      return <Component {...this.props} />;
    }
  }
  return connect(mapStateToProps)(RedirectComponent);
};
