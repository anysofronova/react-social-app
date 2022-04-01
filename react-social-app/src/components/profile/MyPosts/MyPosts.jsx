import React, { createRef } from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const newPostEl = createRef();
  const onPostChange = () => {
    const text = newPostEl.current.value;
    props.changeNewPostText(text);
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
          <button onClick={() => props.addPost()}>Add a new post</button>
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
