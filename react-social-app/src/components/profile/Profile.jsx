import React from "react";
import "./profile.scss";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
  editProfile,
  error,
  editSuccess,
}) {
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <ProfileInfo
          profile={profile}
          status={status}
          updateUserStatus={updateUserStatus}
          isOwner={isOwner}
          savePhoto={savePhoto}
          editProfile={editProfile}
          error={error}
          editSuccess={editSuccess}
        />
        <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;
