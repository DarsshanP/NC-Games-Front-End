import React from "react";
import { getCommentsByReview } from "../api";
import { useEffect, useState } from "react";
import "../styling/Comments.css";
import Comment from "./Comment";

function Commentlist({ review_id, comments, setComments, newComment }) {
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    getCommentsByReview(review_id).then((comments) => {
      setComments(comments);
      setDeleted(false);
    });
  }, [review_id, newComment, deleted, setComments]);

  return !comments.length ? (
    <p>This post has no comments yet</p>
  ) : (
    <div>
      <div className="comment-list">
        {comments.map((comment) => {
          return (
            <Comment
              comment={comment}
              key={comment.comment_id}
              setDeleted={setDeleted}
            ></Comment>
          );
        })}
      </div>
    </div>
  );
}

export default Commentlist;
