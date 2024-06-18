import { User } from "../models/UserModel.js";
import { Product } from "../models/ProductModel.js";

export const getFavorites = async (req, res, next) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id).populate("favorites");
    if (!user) {
      const err = new Error("User not found");
      err.status = 404;
      return next(err);
    }
    res.json({
      message: "success",
      data: user.favorites,
    });
  } catch (error) {
    next(error);
  }
};

export const addToFavorites = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      const err = new Error("User not found");
      err.status = 404;
      return next(err);
    }
    if (user.favorites.push(productId)) {
      const err = new Error("Product already in favorites");
      err.status = 400;
      return next(err);
    }
    user.favorites.push(productId);
    await user.save();
    res.jsn({
      message: "Product added to favorites",
      data: user.favorites,
    });
  } catch (error) {
    next(error);
  }
};

export const removeFromFavorites = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      const err = new Error("User not found");
      err.status = 404;
      return next(err);
    }
    if (!user.favorites.includes(productId)) {
      const err = new Error("Product not in favorites");
      err.status = 404;
      return next(err);
    }

    user.favorites.pull(productId);
    await user.save();
    res.json({
      message: "Product removed from favorites",
      data: user.favorites,
    });
  } catch (error) {
    next(error);
  }
};
