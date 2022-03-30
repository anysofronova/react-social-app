import React from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div className="myPost">
      <div className="myPost__wrapper">
        <div>
          <textarea></textarea>
          <button></button>
        </div>
        <div className="myPost__posts">
          <Post message="Hi, how are you?" likesCount="4" />
          <Post message="It's my first post" likesCount="0" />
        </div>
      </div>
    </div>
  );
}

export default MyPosts;
