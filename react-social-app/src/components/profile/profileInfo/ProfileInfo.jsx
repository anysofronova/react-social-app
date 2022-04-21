import React from "react";
import "./profileInfo.scss";
import defaultUserPhoto from "../../../assets/img/defaultUserPhoto.png";
import PreLoader from "../../UI/PreLoader";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
}) {
  if (!profile) return <PreLoader />;
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
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
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>
        <div className="profile__name">{profile.fullName}</div>
        <div className="profile__status">
          <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
