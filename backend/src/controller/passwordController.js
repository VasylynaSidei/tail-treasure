import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";
import VerificationToken from "../models/verificationToken.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";
import { token } from "morgan";
import { create } from "domain";

export const sendResetPassLink = async (req, res, next) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "user does not exist!" });
    }

    //** Create verficationtoken */

    let verificationtoken = await VerificationToken.findOne({
      userId: user._id,
    });
    if (!verificationtoken) {
      verificationtoken = new VerificationToken({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      });
      await verificationtoken.save();
    }
    const link = `${process.env.CLIENT_DOMAIN}/reset?id=${user._id}&token=${verificationtoken.token}`;

    console.log("Reset password link:", link);
    const htmlTemplate = `<a href="${link}"> click the link to reset your password </a>`;

    await sendEmail(user.email, "Reset Password", htmlTemplate);

    res.status(200).json({
      message: "Password reset link sent to you email",
      userId: user._id,
      token: verificationtoken.token,
    });
  } catch (error) {
    next(error);
  }
};

//** Get the reset pass link*/
export const getResetPasswordLink = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    console.log("User Id:", userId);
    //**chicking if the user and token exist in the DB */

    const user = await User.findById(req.params.userId);
    // console.log("User:", user);
    if (!user) {
      return res.status(400).json({ message: "invalid link!" });
    }
    let verificationtoken = await VerificationToken.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!verificationtoken) {
      return res.status(400).json({ message: "invalid link!" });
    }
    console.log("tokennn:", verificationtoken.token);
    res.status(200).json({ message: "valid link" });
  } catch (error) {
    next(error);
  }
};

//** finally user is allowed to reset password */

export const resetPassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(400).json({ message: "invalid link!" });
    }

    let verificationtoken = await VerificationToken.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!verificationtoken) {
      return res.status(400).json({ message: "invalid link!" });
    }
    if (!user.isAccountVerified) {
      user.isAccountVerified = true;
    }

    //**HASING PASSWORD */

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    user.password = hashedPassword;

    await user.save();
    await VerificationToken.deleteOne({ _id: verificationtoken._id });

    res
      .status(200)
      .json({ message: "Password reset successfully, please login" });
  } catch (error) {
    next(error);
  }
};
