import React from "react";
import { useState, useEffect, useContext } from "react";
import { getReviews } from "../api";
import Reviewcard from "./Reviewcard";
import "../styling/Reviewcard.css";
import Queries from "./Queries";
import { ErrorContext } from "../contexts/Error";
import { Link } from "react-router-dom";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const { isError, setIsError } = useContext(ErrorContext);

  useEffect(() => {
    setIsError(false);
    getReviews(category, sortBy)
      .then((reviewList) => {
        setReviews(reviewList);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setIsError(true);
        }
      });
  }, [category, sortBy, setIsError]);

  if (isError) {
    return (
      <div id="err-msg">
        <h1>Oops! Something went wrong</h1>
        <h2 id="msg-text">
          Here's a link back to the list of existing reviews
        </h2>
        <Link to="/reviews" className="link">
          Review List
        </Link>
      </div>
    );
  } else {
    return (
      <main>
        {isLoading ? (
          <h1 id="loading">Loading...</h1>
        ) : (
          <div>
            <Queries setCategory={setCategory} setSortBy={setSortBy} />
            <ul className="review-list">
              {reviews.map((review) => {
                return (
                  <Reviewcard
                    key={review.review_id}
                    review={review}
                  ></Reviewcard>
                );
              })}
            </ul>
          </div>
        )}
      </main>
    );
  }
}

export default ReviewList;
