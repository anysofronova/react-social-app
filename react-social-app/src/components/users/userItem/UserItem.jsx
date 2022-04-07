import React from "react";
import "./userItem.scss";
import defaultUserPhoto from "../../../assets/img/defaultUserPhoto.png";
import { NavLink } from "react-router-dom";

const UserItem = ({ id, name, photos, status, followed, toggleFollow }) => {
  const onToggleFollow = () => toggleFollow(id);

  return (
    <div className="userItem">
      <div className="userItem__main">
        <img src={photos.small || defaultUserPhoto} alt="user" />
        <button onClick={onToggleFollow}>
          {followed ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className="userItem__info">
        <div className="userItem__info_name">
          <NavLink to={"/profile/" + id}>{name}</NavLink>
        </div>
        <div className="userItem__info_info">
          {status || "The user has hidden the information"}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
