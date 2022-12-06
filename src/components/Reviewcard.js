import React from "react";
import { Link } from "react-router-dom";

function Reviewcard({ review }) {
  return (
    <li className="review-detail">
      <img
        src={review.review_img_url}
        alt={review.title}
        className="reviewimg"
      />
      <div className="review-detail-content">
        <Link to={`/reviews/${review.review_id}`} id="review-link">
          <h2 id="review-detail-title">{review.title}</h2>
        </Link>
        <p>Category: {review.category}</p>
        <p>Posted {review.created_at}</p>
        <div id="review-footer">
          <h4> by {review.owner}</h4>
          <p id="vote-count">{review.votes}</p>
          <p id="heart">❤</p>
        </div>
      </div>
    </li>
  );
}

export default Reviewcard;
