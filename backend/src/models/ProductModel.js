import { Schema, model } from "mongoose";
const required = true;

const categories = ["dogs", "cats", "birds", "rodents"];
const productSchema = new Schema({
  name: {
    type: String,
    required,
  },
  description: String,
  price: {
    type: Number,
    required,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  category: {
    type: String,
    required,
    enum: categories,
  },
  image: String,
  isFeatured: {
    type: Boolean,
    default: false,
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Product = model("Product", productSchema);
