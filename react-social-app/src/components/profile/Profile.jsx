import React from "react";
import "./profile.scss";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile({ profile, status, updateUserStatus }) {
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <ProfileInfo
          profile={profile}
          status={status}
          updateUserStatus={updateUserStatus}
        />
        <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;
