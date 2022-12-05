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
