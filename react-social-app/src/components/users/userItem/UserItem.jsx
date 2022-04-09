import React from "react";
import "./userItem.scss";
import defaultUserPhoto from "../../../assets/img/defaultUserPhoto.png";
import { NavLink } from "react-router-dom";

const UserItem = ({
  id,
  name,
  photos,
  status,
  followed,
  followingInProgress,
  getFollow,
  getUnFollow,
}) => {
  const isDisabled = () => followingInProgress.some((idUser) => idUser === id);
  return (
    <div className="userItem">
      <div className="userItem__main">
        <img src={photos.small || defaultUserPhoto} alt="user" />
        {followed ? (
          <button disabled={isDisabled()} onClick={() => getUnFollow(id)}>
            Unfollow
          </button>
        ) : (
          <button disabled={isDisabled()} onClick={() => getFollow(id)}>
            Follow
          </button>
        )}
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
