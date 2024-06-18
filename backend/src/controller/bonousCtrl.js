import { User } from "../models/UserModel.js";

export const getBonusPoints = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    console.log("user id from bonus:", userId);
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ bonusPoints: user.bonusPoints });
  } catch (error) {
    next(error);
  }
};

export const updateBonusPoints = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { bonusPoints } = req.body;

    if (!bonusPoints) {
      return res.status(400).json({ error: "Bonus points value is missing" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.bonusPoints = bonusPoints;
    await user.save();

    res.status(200).json({
      message: "Bonus points updated successfully",
      bonusPoints: user.bonusPoints,
    });
  } catch (error) {
    next(error);
  }
};
