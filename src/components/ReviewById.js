import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviewById } from "../api";
import Commentlist from "./Commentlist";
import { updateVoteCount } from "../api";
import CommentBox from "./CommentBox";

function ReviewById() {
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [commentClick, setCommentClick] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [isError, setIsError] = useState(false);

  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id)
      .then((review) => {
        setReview(review);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setIsError(true);
        }
      });
  }, [review_id]);

  const likeHandler = () => {
    if (!isClicked) {
      setReview((currReview) => {
        return { ...currReview, votes: currReview.votes + 1 };
      });
      setIsClicked(true);
      updateVoteCount(review_id, 1).then((updatedReview) => {});
    } else {
      setReview((currReview) => {
        return { ...currReview, votes: currReview.votes - 1 };
      });
      setIsClicked(false);
      updateVoteCount(review_id, -1).then((updatedReview) => {});
    }
  };

  const commentButtonHandler = () => {
    if (!commentClick) {
      setCommentClick(true);
    } else {
      setCommentClick(false);
    }
  };

  if (isError) {
    return (
      <div id="err-msg">
        <h1>Oops! This review does not exist yet</h1>
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
                <h2>{review.title}</h2>
                <p>
                  review by <strong>{review.owner}</strong>
                </p>
              </header>
              <p className="review-date">
                Posted {new Date(review.created_at).toDateString()}
              </p>
              <p className="reviewbody">{review.review_body}</p>
              <div className="like-review-container">
                <h5>Like this review? </h5>
                <button
                  className={isClicked ? "heart-button-active" : "heart-button"}
                  onClick={likeHandler}
                >
                  <p>{review.votes} ❤</p>
                </button>
              </div>
            </div>
            <div className="comment-container">
              <div className="comment-header">
                {comments.length === 1 ? (
                  <h4 className="reviewcomments">1 comment</h4>
                ) : (
                  <h4 className="reviewcomments">{comments.length} comments</h4>
                )}
                <button onClick={commentButtonHandler}>
                  Comment on this review!
                </button>
              </div>
              {commentClick ? (
                <CommentBox
                  review_id={review_id}
                  setComments={setComments}
                  newComment={newComment}
                  setNewComment={setNewComment}
                ></CommentBox>
              ) : null}
              <Commentlist
                review_id={review_id}
                comments={comments}
                setComments={setComments}
                newComment={newComment}
              ></Commentlist>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ReviewById;
