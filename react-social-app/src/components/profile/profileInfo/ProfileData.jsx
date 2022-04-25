import React from "react";
import ProfileStatus from "./ProfileStatus";
import Contacts from "./contacts/Contacts";
import "./ProfileData.scss";

const ProfileData = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  goToEditMode,
}) => {
  const {
    fullName,
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
    contacts,
  } = profile;
  return (
    <div className="profile__info">
      <div className="profile__name">{fullName}</div>
      <div className="profile__status">
        <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
      </div>
      <div className="profile__aboutMe">
        <span className="profile__key">About {fullName}:&#160;</span>
        {aboutMe || "no info"}
      </div>
      <div className="profile__job">
        <span className="profile__key">
          {fullName} is looking for a job:&#160;
        </span>
        {lookingForAJob ? "YES" : "NO"}
      </div>
      <div className="profile__lookingForAJobDescription">
        <span className="profile__key">Professional Description:&#160;</span>
        {lookingForAJobDescription || "no info"}
      </div>
      <div className="profile__contacts">
        <Contacts contacts={contacts} />
      </div>
      {isOwner && (
        <button className="editMode_button" onClick={goToEditMode}>
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default ProfileData;
