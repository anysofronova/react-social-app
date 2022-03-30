import React from "react";

function Post({ message, likesCount }) {
  return (
    <div className="post">
      <div className="post__wrapper">{message}</div>
      <div className="post__likes">{likesCount} likes</div>
    </div>
  );
}

export default Post;
