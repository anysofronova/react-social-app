import React from "react";
import "./NotFound.scss";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound__face">
        <div className="notFound__band">
          <div className="notFound__red"></div>
          <div className="notFound__white"></div>
          <div className="notFound__blue"></div>
        </div>
        <div className="notFound__eyes"></div>
        <div className="notFound__dimples"></div>
        <div className="notFound__mouth"></div>
      </div>

      <h1 className="notFound__title">Oops! Something went wrong!</h1>
      <NavLink to={"/"}>
        <div className="notFound__btn">Return to Home</div>
      </NavLink>
    </div>
  );
}

export default NotFound;
