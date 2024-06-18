import Category from "../models/CategoriesModel.js";

// @desc    Create New Category
// @route   POST /api/categories
// @access  Private (only admin)

export const createCategoryCtrl = async (req, res, next) => {
  const { title } = req.body;

  try {
    const newCategory = await Category.create({
      title: title,
    });

    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

// @desc    Get All Categories
// @route   GET /categories
// @access  Public
export const getAllCategoriesCtrl = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

// @desc    Update Category
// @route   PUT /categories/:id
// @access  Private (only admin)

export const updateCategoryCtrl = async (req, res, next) => {
  const categoryId = req.params.id;
  const { title } = req.body;

  try {
    let category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    category.title = title;
    category = await category.save();

    res.status(200).json({
      message: "Category has been updated successfully",
      category: category,
    });
  } catch (error) {
    next(error);
  }
};
// @desc    Delete Category
// @route   DELETE /categories/:id
// @access  Private (only admin)

export const deleteCategoryCtrl = async (req, res, next) => {
  const categoryId = req.params.id;

  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    await Category.findByIdAndDelete(categoryId);

    res.status(200).json({
      message: "Category has been deleted successfully",
      categoryId: categoryId,
    });
  } catch (error) {
    next(error);
  }
};
