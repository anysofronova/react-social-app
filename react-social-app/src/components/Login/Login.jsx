import React from "react";
import "./login.scss";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { getLogIn } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

const LoginForm = ({ getLogIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    getLogIn(data);
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
            {...register("email", { required: true })}
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
            {...register("password", { required: true })}
          />
        </label>
      </div>
      <div className="login__form_errors">
        <p>{errors.email?.type === "required" && "Email is required"}</p>
        <p>{errors.password?.type === "required" && "Password is required"}</p>
      </div>
      <div className="login__form_checkbox">
        <input type="checkbox" {...register("rememberMe")} />
        remember me
      </div>
      <button>LOGIN</button>
      <p>Test email: free@samuraijs.com</p>
      <p>Test password: free</p>
    </form>
  );
};

const Login = ({ getLogIn, isAuth }) => {
  if (isAuth) return <Navigate replace to="/" />;
  return (
    <div className="login">
      <div className="login__wrapper">
        <h1>Login</h1>
        <LoginForm getLogIn={getLogIn} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};
export default connect(mapStateToProps, { getLogIn })(Login);
