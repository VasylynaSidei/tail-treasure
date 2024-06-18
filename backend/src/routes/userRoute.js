import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUsersCount,
} from "../controller/userController.js";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middlewares/veryfyToken.js";

const userRoute = express.Router();

userRoute.get("/count", verifyTokenAndAdmin, getUsersCount);
userRoute.get("/", verifyTokenAndAdmin, getAllUsers);
userRoute.get("/:userID", getUserById);

userRoute.put("/:userID", verifyToken, updateUser);
userRoute.delete("/:userID", verifyTokenAndAuthorization, deleteUser);

export default userRoute;
