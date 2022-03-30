import React from "react";
import "./profile.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <ProfileInfo />
        <MyPosts />
      </div>
    </div>
  );
}

export default Profile;
