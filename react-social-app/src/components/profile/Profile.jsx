import React from "react";
import "./profile.scss";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile({ profile, status, updateUserStatus, isOwner, savePhoto }) {
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <ProfileInfo
          profile={profile}
          status={status}
          updateUserStatus={updateUserStatus}
          isOwner={isOwner}
          savePhoto={savePhoto}
        />
        <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;
