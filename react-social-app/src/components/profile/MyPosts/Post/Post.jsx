import React from "react";
import "./post.scss";

function Post({ message, likesCount }) {
  return (
    <div className="post">
      <div className="post__message">{message}</div>
      <div className="post__likes">{likesCount}👍🏻</div>
    </div>
  );
}

export default Post;
