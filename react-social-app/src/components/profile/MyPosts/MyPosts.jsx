import React from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div className="myPost">
      <div className="myPost__wrapper">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;
