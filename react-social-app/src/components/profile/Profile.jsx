import React from "react";
import "./profile.scss";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile({ store }) {
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <ProfileInfo />
        <MyPostsContainer store={store} />
      </div>
    </div>
  );
}

export default Profile;
