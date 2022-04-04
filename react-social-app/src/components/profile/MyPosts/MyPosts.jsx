import React from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";

const MyPosts = ({ changeNewPostText, addPost, newPostText, postsData }) => {
  const onChangeNewPostText = (e) => changeNewPostText(e.target.value);
  const onAddPost = () => addPost();

  return (
    <div className="myPosts">
      <div className="myPosts__wrapper">
        <div className="myPosts__add">
          <textarea
            onChange={onChangeNewPostText}
            className="myPosts__textarea"
            value={newPostText}
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
