import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header({ isAuth, getLogOut }) {
  return (
    <header className="header">
      <Link to="/">Anna Sofronova</Link>
      <div className="header__login">
        {isAuth ? (
          <div>
            <button onClick={getLogOut}>Log Out</button>
          </div>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
