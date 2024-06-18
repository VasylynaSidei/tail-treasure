import mongoose from "mongoose";
const allowedCategories = ["dogs", "cats", "birds", "rodents"];
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      enum: allowedCategories,
    },
  },

  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
