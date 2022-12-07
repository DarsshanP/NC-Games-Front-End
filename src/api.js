import axios from "axios";

const gameReviewsApi = axios.create({
  baseURL: "https://wild-jade-crane-tie.cyclic.app/api",
});

export const getReviews = () => {
  return gameReviewsApi.get("/reviews").then((res) => {
    return res.data;
  });
};

export const getReviewById = (review_id) => {
  return gameReviewsApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data;
  });
};

export const getCommentsByReview = (review_id) => {
  return gameReviewsApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data;
  });
};

export const updateVoteCount = (review_id, inc) => {
  return gameReviewsApi
    .patch(`/reviews/${review_id}`, { inc_vote: inc })
    .then((res) => {
      return res.data;
    });
};

export const postComment = (review_id, comment) => {
  return gameReviewsApi
    .post(`/reviews/${review_id}/comments`, comment)
    .then((res) => {
      return res.data;
    });
};
