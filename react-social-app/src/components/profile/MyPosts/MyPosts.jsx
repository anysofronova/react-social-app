import React, { createRef } from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const newPostEl = createRef();
  const addNewPost = () => {
    const text = newPostEl.current.value;
    props.addPost(text);
    newPostEl.current.value = "";
  };

  return (
    <div className="myPosts">
      <div className="myPosts__wrapper">
        <div className="myPosts__add">
          <textarea className="myPosts__textarea" ref={newPostEl}></textarea>
          <button onClick={addNewPost}>Add a new post</button>
        </div>
        <div className="myPosts__posts">
          {props.postsData.map((i) => (
            <Post message={i.post} key={i.id} likesCount={i.likesCount} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
