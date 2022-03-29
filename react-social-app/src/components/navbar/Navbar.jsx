import React from "react";
import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <ul className="navbar__list">
          <li className="navbar__item">Profile</li>
          <li className="navbar__item">Messeges</li>
          <li className="navbar__item">News</li>
          <li className="navbar__item">Music</li>
          <li className="navbar__item">Settings</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
