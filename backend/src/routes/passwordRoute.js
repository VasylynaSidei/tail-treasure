import express from "express";
import {
  sendResetPassLink,
  getResetPasswordLink,
  resetPassword,
} from "../controller/passwordController.js";
import { validateUser } from "../middlewares/userValidation.js";

const passwordRoute = express.Router();

passwordRoute.post("/reset", sendResetPassLink);

passwordRoute.get("/:userId/reset/:token", getResetPasswordLink);

passwordRoute.post("/:userId/reset/:token", resetPassword);

export default passwordRoute;
