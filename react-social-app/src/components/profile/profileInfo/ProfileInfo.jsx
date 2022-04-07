import React from "react";
import "./profileInfo.scss";
import defaultUserPhoto from "../../../assets/img/defaultUserPhoto.png";
import PreLoader from "../../UI/PreLoader";

function ProfileInfo({ profile }) {
  if (!profile) {
    return <PreLoader />;
  }
  return (
    <div className="profileInfo">
      <div className="profile__bgimg"></div>
      <div className="profile__desc">
        <div className="profile__img">
          <img
            src={
              profile.photos.large || profile.photos.small || defaultUserPhoto
            }
            alt="profile"
          />
        </div>
        <div className="profile__name">{profile.fullName}</div>
        <div className="profile__status">{profile.aboutMe}</div>
      </div>
    </div>
  );
}

export default ProfileInfo;
