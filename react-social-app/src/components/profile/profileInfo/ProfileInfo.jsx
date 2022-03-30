import React from "react";
import "./profileInfo.scss";

function ProfileInfo() {
  return (
    <div className="profileInfo">
      <div className="profile__bgimg"></div>
      <div className="profile__desc">
        <img
          src="https://img4.goodfon.ru/original/1024x1024/f/9b/devushka-vzgliad-portret-svet-eikonas.jpg"
          alt=""
        />
        Some info about yourself
      </div>
    </div>
  );
}

export default ProfileInfo;
