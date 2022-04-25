import React from "react";
import "./post.scss";

function Post({
  message,
  likesCount,
  getDeletePost,
  likeTogglePost,
  id,
  isLiked,
}) {
  const onDeletePost = () => getDeletePost(id);
  const onLikeTogglePost = () => likeTogglePost(id);
  return (
    <div className="post">
      <div className="post__message">{message}</div>
      <label className="post__likes">
        {likesCount}
        <button onClick={onLikeTogglePost}>{isLiked ? "❤️" : "🖤"}</button>
      </label>
      <button className="post__deleteButton" onClick={onDeletePost}>
        ╳
      </button>
    </div>
  );
}

export default Post;
