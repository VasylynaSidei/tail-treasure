import { User } from "../models/UserModel.js";
import { Product } from "../models/ProductModel.js";

export const purchaseProduct = async (req, res, next) => {
  try {
    const { userId, productId, quantity } = req.body;

    const user = await User.findById(userId);
    const product = await Product.findById(productId);
    console.log("User found:", user);
    console.log("Product id", productId);
    console.log("Product found:", product);
    if (!user || !product) {
      return res.status(404).json({ error: "User or Product not found" });
    }

    const price = (product.price * quantity).toFixed(2);
    const bonusPoints = parseFloat(price) * 0.1;
    user.history.push({
      productId: product._id,
      quantity,
      price: parseFloat(price),
      date: new Date(),
      bonusPoints: bonusPoints,
    });
    user.bonusPoints += bonusPoints;
    await user.save();

    res.status(200).json({
      message: "Purchase successful",
      history: user.history,
      bonusPoints: user.bonusPoints,
    });
    console.log("bonous from BE:", bonusPoints);
  } catch (error) {
    next(error);
  }
};

export const getPurchaseHistory = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId).populate("history.productId");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ history: user.history });
  } catch (error) {
    next(error);
  }
};
