import React from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div className="myPosts">
      <div className="myPosts__wrapper">
        <div className="myPosts__add">
          <textarea className="myPosts__textarea"></textarea>
          <button>Add a new post</button>
        </div>
        <div className="myPosts__posts">
          <Post message="Hi, how are you?" likesCount="4" />
          <Post message="It's my first post" likesCount="0" />
        </div>
      </div>
    </div>
  );
}

export default MyPosts;
