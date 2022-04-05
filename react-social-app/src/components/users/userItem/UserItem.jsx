import React from "react";
import "./userItem.scss";
import defaultUserPhoto from "../../../assets/img/defaultUserPhoto.png";

const UserItem = ({
  id,
  name,
  photos,
  location,
  status,
  followed,
  toggleFollow,
}) => {
  const onToggleFollow = () => toggleFollow(id);

  return (
    <div className="userItem">
      <div className="userItem__main">
        <img
          src={photos.small === null ? defaultUserPhoto : photos.small}
          alt="user"
        />
        <button onClick={onToggleFollow}>
          {followed ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className="userItem__info">
        <div className="userItem__nameAndStatus">
          <div className="userItem__info_name">{name}</div>
          <div className="userItem__info_info">
            {status === null ? "The user has hidden the information" : status}
          </div>
        </div>
        <div className="userItem__info_country">
          <span>{location === null ? "No info" : location.country},</span>
          <span>{location === null ? "No info" : location.city}</span>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
