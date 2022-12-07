import React from "react";
import { useState, useEffect } from "react";
import { getReviews } from "../api";
import Reviewcard from "./Reviewcard";
import "../styling/Reviewcard.css";
import Queries from "./Queries";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");

  useEffect(() => {
    getReviews(category).then((reviewList) => {
      setReviews(reviewList);
      setIsLoading(false);
    });
  }, [category]);

  return (
    <main>
      {isLoading ? (
        <h1 id="loading">Loading...</h1>
      ) : (
        <div id="category-and-list">
          <Queries setCategory={setCategory} />
          <ul className="review-list">
            {reviews.map((review) => {
              return (
                <Reviewcard key={review.review_id} review={review}></Reviewcard>
              );
            })}
          </ul>
        </div>
      )}
    </main>
  );
}

export default ReviewList;
