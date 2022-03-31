import React from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";

function MyPosts(props) {
  return (
    <div className="myPosts">
      <div className="myPosts__wrapper">
        <div className="myPosts__add">
          <textarea className="myPosts__textarea"></textarea>
          <button>Add a new post</button>
        </div>
        <div className="myPosts__posts">
          {props.postsData.map((i) => (
            <Post message={i.post} key={i.id} likesCount={i.likesCount} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPosts;
