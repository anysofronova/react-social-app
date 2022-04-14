import React from "react";
import "./login.scss";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { getLogIn } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

const LoginForm = ({ getLogIn, loginSuccess, error }) => {
  const { register, handleSubmit, resetField } = useForm();
  let onSubmit = (data) => {
    getLogIn(data);
    resetField("password");
  };

  return (
    <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="login__form_text">
        <label>
          Email:
          <input
            placeholder="Email"
            required={true}
            type="email"
            autoComplete="on"
            {...register("email")}
          />
        </label>
      </div>
      <div className="login__form_password">
        <label>
          Password:
          <input
            required={true}
            type="password"
            placeholder="Password"
            autoComplete="on"
            {...register("password")}
          />
        </label>
      </div>
      <div className="login__form_checkbox">
        <input type="checkbox" {...register("rememberMe")} />
        remember me
      </div>
      <div className="login__form_error">{loginSuccess ? "" : error}</div>
      <button>LOGIN</button>
      <p>Test email: free@samuraijs.com</p>
      <p>Test password: free</p>
    </form>
  );
};

const Login = ({ getLogIn, isAuth, loginSuccess, error }) => {
  if (isAuth) return <Navigate replace to="/" />;
  return (
    <div className="login">
      <div className="login__wrapper">
        <h1>Login</h1>
        <LoginForm
          getLogIn={getLogIn}
          loginSuccess={loginSuccess}
          error={error}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    error: state.authReducer.error,
    loginSuccess: state.authReducer.loginSuccess,
  };
};
export default connect(mapStateToProps, { getLogIn })(Login);
