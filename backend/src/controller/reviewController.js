import { Product } from "../models/ProductModel.js";
import { Review } from "../models/ReviewModel.js";
import { User } from "../models/UserModel.js";

export const getAllReview = async (req, res, next) => {
  try {
    const reviews = await Review.find({})
      .populate("user", "firstName lastName")
      .populate("product", "name");
    res.json({ message: "success", data: reviews });
  } catch (error) {
    next(error);
  }
};

export const getReviewsByProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const review = await Review.find({ product: productId }).populate("user");
    res.json({ message: "success", data: review });
  } catch (error) {
    next(error);
  }
};

export const addNewReview = async (req, res, next) => {
  try {
    const { userId, productId, rating, comment } = req.body;
    const user = await User.findById(userId);
    const product = await Product.findById(productId);
    console.log(product);
    const newReview = new Review({
      user: user._id,
      product: product._id,
      rating,
      comment,
    });
    product.reviews.push(newReview);
    user.reviews.push(newReview);
    await Promise.all([user, product, newReview].map((el) => el.save())); //same as
    // await user.save(); await product.save(); newReview.save()
    res.status(201).json({ message: "success", data: newReview });
  } catch (error) {
    next(error);
  }
};

export const updateReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { comment, adminComment } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { comment, adminComment },
      { new: true }
    );
    res.json({ message: "Review updated successfully", data: updatedReview });
  } catch (error) {
    next(error);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Review.findByIdAndDelete(id);
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    next(error);
  }
};
