import { Schema, model } from "mongoose";

const required = true;
const reviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required,
  },
  comment: {
    type: String,
  },
  adminComment: { type: String },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },

  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Review = model("Review", reviewSchema);
