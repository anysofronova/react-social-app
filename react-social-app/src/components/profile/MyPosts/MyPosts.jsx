import React, { useState } from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";

const MyPosts = ({ getAddPost, postsData }) => {
  const onAddPost = () => {
    getAddPost(newPost);
    setNewPost("");
  };
  const [newPost, setNewPost] = useState("");
  const onSetNewPost = (e) => setNewPost(e.currentTarget.value);

  return (
    <div className="myPosts">
      <div className="myPosts__wrapper">
        <div className="myPosts__add">
          <textarea
            onChange={onSetNewPost}
            className="myPosts__textarea"
            value={newPost}
          />
          <button onClick={onAddPost}>Add a new post</button>
        </div>
        <div className="myPosts__posts">
          {postsData.map((i) => (
            <Post message={i.post} key={i.id} likesCount={i.likesCount} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
