import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <form className="login__form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </form>
        <button>LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
