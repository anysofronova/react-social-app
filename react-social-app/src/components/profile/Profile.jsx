import React from "react";
import "./profile.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <ProfileInfo />
        <MyPosts
          postsData={props.profilePage.postsData}
          newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
}

export default Profile;
