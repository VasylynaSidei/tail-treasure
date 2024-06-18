import express from "express";
import { verifyTokenAndAdmin } from "../middlewares/veryfyToken.js";

const adminRouter = express.Router();

adminRouter.get("/", verifyTokenAndAdmin, (req, res, next) => {
  try {
    res.send("Admin dashboard");
  } catch (error) {
    next(error);
  }
});

export default adminRouter;
