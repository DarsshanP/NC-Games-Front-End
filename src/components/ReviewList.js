import React from "react";
import { useState, useEffect } from "react";
import { getReviews } from "../api";
import Reviewcard from "./Reviewcard";
import "../styling/Reviewcard.css";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviewList) => {
      setReviews(reviewList);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      {isLoading ? (
        <h1 id="loading">Loading...</h1>
      ) : (
        <ul className="review-list">
          {reviews.map((review) => {
            return (
              <Reviewcard key={review.review_id} review={review}></Reviewcard>
            );
          })}
        </ul>
      )}
    </main>
  );
}

export default ReviewList;
