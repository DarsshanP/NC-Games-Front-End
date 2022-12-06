import React from "react";
import { getCommentsByReview } from "../api";
import { useEffect } from "react";
import "../styling/Comments.css";
import Comment from "./Comment";

function Commentlist({ review_id, comments, setComments }) {
  useEffect(() => {
    getCommentsByReview(review_id).then((comments) => {
      setComments(comments);
    });
  }, [review_id, setComments]);

  return !comments.length ? (
    <p>This post has no comments yet</p>
  ) : (
    <div>
      <div className="comment-list">
        {comments.map((comment) => {
          return <Comment comment={comment} key={comment.comment_id}></Comment>;
        })}
      </div>
    </div>
  );
}

export default Commentlist;
