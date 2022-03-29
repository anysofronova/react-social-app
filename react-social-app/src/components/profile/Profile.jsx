import React from "react";
import "./profile.scss";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <div className="profile__img">
          <img
            src="https://img1.goodfon.ru/original/1920x1200/8/52/emma-uotson-emma-watson-1608.jpg"
            alt=""
          />
        </div>
        <div className="profile__desc">ava + desc</div>
        <MyPosts />
      </div>
    </div>
  );
}

export default Profile;
