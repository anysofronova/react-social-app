import React, { useState } from "react";
import "./profileInfo.scss";
import defaultUserPhoto from "../../../assets/img/defaultUserPhoto.png";
import PreLoader from "../../UI/PreLoader";
import ProfileData from "./ProfileData";
import ProfileForm from "./ProfileForm";

function ProfileInfo({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
  editProfile,
  error,
  editSuccess,
}) {
  const [editMode, setEditMode] = useState(false);
  if (!profile) return <PreLoader />;
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div className="profileInfo">
      <div className="profile__bgImg">&#160;</div>
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
        {editMode ? (
          <ProfileForm
            profile={profile}
            editProfile={editProfile}
            setEditMode={setEditMode}
            error={error}
            editSuccess={editSuccess}
          />
        ) : (
          <ProfileData
            profile={profile}
            status={status}
            updateUserStatus={updateUserStatus}
            isOwner={isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ProfileInfo;
