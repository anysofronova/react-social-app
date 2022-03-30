import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">Anna Sofronova</Link>
    </header>
  );
}

export default Header;
