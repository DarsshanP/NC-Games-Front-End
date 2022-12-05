import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../api";

function ReviewById() {
  const [review, setReview] = useState({});

  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((review) => {
      setReview(review);
    });
  }, [review_id]);
  return (
    <div id="review-div">
      <div className="review-container">
        <img src={review.review_img_url} className="content-reviewimg" />
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
          <h3 className="reviewcomments">Comments</h3>
        </div>
      </div>
    </div>
  );
}

export default ReviewById;
