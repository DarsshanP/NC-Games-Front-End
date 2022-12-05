import React from "react";

function Reviewcard({ review }) {
  return (
    <li className="review-detail">
      <img
        src={review.review_img_url}
        alt={review.title}
        className="reviewimg"
      />
      <div className="review-detail-content">
        <h2>{review.title}</h2>
        <p>Category: {review.category}</p>
        <p>Posted {review.created_at}</p>
        <h4> by {review.owner}</h4>
        <p>{review.votes} votes</p>
      </div>
    </li>
  );
}

export default Reviewcard;
