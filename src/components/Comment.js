import React, { useContext } from "react";
import { UserContext } from "../contexts/User";
import { deleteComment } from "../api";

function Comment({ comment, setDeleted }) {
  const { user } = useContext(UserContext);

  const deleteHandler = (e) => {
    deleteComment(e.target.id).then((res) => {
      setDeleted(true);
    });
  };

  return (
    <div className="comment-item">
      <div>
        <div id="comment-author">
          <h4>{comment.author}</h4>
          <p>
            {comment.votes} votes •{" "}
            {new Date(comment.created_at).toDateString()}
          </p>
        </div>
        <div id="comment-body">
          <p>{comment.body}</p>
        </div>
      </div>
      {user.username === comment.author ? (
        <button id="trash-button" onClick={deleteHandler}>
          <img
            id={comment.comment_id}
            className="trash"
            src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png"
            alt="trash can"
          />
        </button>
      ) : null}
    </div>
  );
}

export default Comment;
