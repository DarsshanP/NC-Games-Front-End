import React from "react";

function Comment({ comment }) {
  return (
    <div className="comment-item">
      <div id="comment-author">
        <p>{comment.author}</p>
        <p>{comment.votes} votes</p>
      </div>
      <div id="comment-body">
        <p>{comment.body}</p>
        <p>{new Date(comment.created_at).toDateString()}</p>
      </div>
    </div>
  );
}

export default Comment;
