import React from "react";
import "./post.scss";

function Post({ message, likesCount, getDeletePost, id }) {
  const onDeletePost = () => getDeletePost(id);
  return (
    <div className="post">
      <div className="post__message">{message}</div>
      <div className="post__likes">{likesCount}👍🏻</div>
      <button className="post__deleteButton" onClick={onDeletePost}>
        ╳
      </button>
    </div>
  );
}

export default Post;
