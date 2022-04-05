import React from "react";
import "./userItem.scss";

const UserItem = ({
  id,
  fullName,
  photoURL,
  location,
  status,
  followed,
  toggleFollow,
}) => {
  const onToggleFollow = () => toggleFollow(id);

  return (
    <div className="userItem">
      <div className="userItem__main">
        <img src={photoURL} alt="user" />
        <button onClick={onToggleFollow}>
          {followed ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className="userItem__info">
        <div className="userItem__nameAndStatus">
          <div className="userItem__info_name">{fullName}</div>
          <div className="userItem__info_info">{status}</div>
        </div>
        <div className="userItem__info_country">
          <span>{location.country}</span>
          <span>{location.city}</span>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
