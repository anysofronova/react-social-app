import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header({ isAuth, login }) {
  return (
    <header className="header">
      <Link to="/">Anna Sofronova</Link>
      <div className="header__login">
        {isAuth ? (
          <Link to="/profile">{login}</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
