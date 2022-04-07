import React from "react";
import "./profile.scss";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile({ profile }) {
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <ProfileInfo profile={profile} />
        <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;
