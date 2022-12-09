import React from "react";
import { getCommentsByReview } from "../api";
import { useEffect, useState, useContext } from "react";
import "../styling/Comments.css";
import Comment from "./Comment";
import { ErrorContext } from "../contexts/Error";

function Commentlist({ review_id, comments, setComments, newComment }) {
  const [deleted, setDeleted] = useState(false);
  const { setIsError } = useContext(ErrorContext);

  useEffect(() => {
    setIsError(false);
    getCommentsByReview(review_id)
      .then((comments) => {
        setComments(comments);
        setDeleted(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setIsError(true);
        }
      });
  }, [review_id, newComment, deleted, setComments, setIsError]);

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
