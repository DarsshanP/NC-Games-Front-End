import React from "react";
import { useState, useEffect } from "react";
import { getReviews } from "../api";
import Reviewcard from "./Reviewcard";
import "../styling/Reviewcard.css";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewList) => {
      setReviews(reviewList);
    });
  }, []);

  return (
    <main>
      <ul className="review-list">
        {reviews.map((review) => {
          return (
            <Reviewcard key={review.review_id} review={review}></Reviewcard>
          );
        })}
      </ul>
    </main>
  );
}

export default ReviewList;
