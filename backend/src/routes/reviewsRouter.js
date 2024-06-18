import { Router } from "express";
import {
  addNewReview,
  deleteReview,
  getAllReview,
  getReviewsByProduct,
  updateReview,
} from "../controller/reviewController.js";
import { validateReview } from "../middlewares/reviewsValidation.js";

const reviewsRouter = Router();

reviewsRouter
  .route("/product")
  .get(getAllReview)
  .post(validateReview, addNewReview);

reviewsRouter.route("/product/:productId").get(getReviewsByProduct);

reviewsRouter
  .route("/:id")
  .put(validateReview, updateReview)
  .delete(deleteReview);

export default reviewsRouter;
