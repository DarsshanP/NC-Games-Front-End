import React from "react";

function Comment({ comment }) {
  return (
    <div className="comment-item">
      <div id="comment-author">
        <h4>{comment.author}</h4>
        <p>
          {comment.votes} votes • {new Date(comment.created_at).toDateString()}
        </p>
      </div>
      <div id="comment-body">
        <p>{comment.body}</p>
      </div>
    </div>
  );
}

export default Comment;
