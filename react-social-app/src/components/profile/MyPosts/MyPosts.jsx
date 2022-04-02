import React from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  changeNewPostTextActionCreator,
} from "../../../redux/profileReducer";

const MyPosts = (props) => {
  const onPostChange = (e) => {
    let action = changeNewPostTextActionCreator(e.target.value);
    props.dispatch(action);
  };

  return (
    <div className="myPosts">
      <div className="myPosts__wrapper">
        <div className="myPosts__add">
          <textarea
            onChange={onPostChange}
            className="myPosts__textarea"
            value={props.newPostText}
          />
          <button onClick={() => props.dispatch(addPostActionCreator())}>
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
