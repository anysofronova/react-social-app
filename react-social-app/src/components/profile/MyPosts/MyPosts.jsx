import React, { createRef } from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const newPostEl = createRef();
  const onPostChange = () => {
    const newText = newPostEl.current.value;
    props.dispatch({ type: "CHANGE_NEW_POST_TEXT", newText });
  };

  return (
    <div className="myPosts">
      <div className="myPosts__wrapper">
        <div className="myPosts__add">
          <textarea
            onChange={onPostChange}
            className="myPosts__textarea"
            ref={newPostEl}
            value={props.newPostText}
          />
          <button onClick={() => props.dispatch({ type: "ADD_POST" })}>
            Add a new post
          </button>
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
