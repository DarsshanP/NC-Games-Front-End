import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../api";
import Viewcomments from "./Viewcomments";

function ReviewById() {
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [review_id]);
  return (
    <div id="review-div">
      {isLoading ? (
        <h1 id="loading">Loading...</h1>
      ) : (
        <div className="review-container">
          <img
            src={review.review_img_url}
            className="content-reviewimg"
            alt={review.title}
          />
          <div className="body-container">
            <header className="reviewedby">
              review by <strong>{review.owner}</strong>
              <h2>{review.title}</h2>
            </header>
            <p className="review-date">
              Posted {new Date(review.created_at).toDateString()}
            </p>
            <p className="reviewbody">{review.review_body}</p>
          </div>
          <div className="comment-container">
            {comments.length === 1 ? (
              <h4 className="reviewcomments">1 comment</h4>
            ) : (
              <h4 className="reviewcomments">{comments.length} comments</h4>
            )}
            <Viewcomments
              review_id={review_id}
              comments={comments}
              setComments={setComments}
            ></Viewcomments>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewById;
