import React from "react";
import {
  addPostActionCreator,
  changeNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ store }) => {
  const changeNewPostText = (text) => {
    let action = changeNewPostTextActionCreator(text);
    store.dispatch(action);
  };
  const addPost = () => {
    store.dispatch(addPostActionCreator());
  };

  return (
    <MyPosts
      changeNewPostText={changeNewPostText}
      addPost={addPost}
      profileReducer={store.getState().profileReducer}
    />
  );
};

export default MyPostsContainer;
