import React from "react";
import { getCommentsByReview } from "../api";
import { useEffect } from "react";
import "../styling/Comments.css";
import Comment from "./Commentlist";

function Viewcomments({ review_id, comments, setComments }) {
  useEffect(() => {
    getCommentsByReview(review_id).then((comments) => {
      setComments(comments);
    });
  }, [review_id, setComments]);

  return !comments.length ? (
    <p>This post has no comments yet</p>
  ) : (
    <div>
      <ul className="comment-list">
        {comments.map((comment) => {
          return <Comment comment={comment}></Comment>;
        })}
      </ul>
    </div>
  );
}

export default Viewcomments;
