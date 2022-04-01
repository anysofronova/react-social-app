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
          addPost={props.addPost}
          newPostText={props.profilePage.newPostText}
          changeNewPostText={props.changeNewPostText}
        />
      </div>
    </div>
  );
}

export default Profile;
