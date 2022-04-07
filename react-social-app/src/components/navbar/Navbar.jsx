import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/dialogs">Messages</NavLink>
          </li>
          <li className="navbar__item">News</li>
          <li className="navbar__item">Music</li>
          <li className="navbar__item">
            <NavLink to="/users"> Find Users</NavLink>
          </li>
          <li className="navbar__item">Settings</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
