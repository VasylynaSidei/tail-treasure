import { validationResult, check } from "express-validator";
import Category from "../models/CategoriesModel.js";

export const validateCategory = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    check("title")
      .isLength({ min: 3 })
      .withMessage("Title must be at least 3 characters long");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const existingCategory = await Category.findOne({ title });
    if (existingCategory) {
      return res.status(400).json({ error: "Category already exists" });
    }

    next();
  } catch (error) {
    next(error);
  }
};
