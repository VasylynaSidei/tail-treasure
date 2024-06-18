import express from "express";
import {
  purchaseProduct,
  getPurchaseHistory,
} from "../controller/purchaseController.js";
import { verifyToken } from "../middlewares/veryfyToken.js";

const purchaseRoute = express.Router();

purchaseRoute.post("/purchase", purchaseProduct);
purchaseRoute.get("/history/:userId", getPurchaseHistory);

export default purchaseRoute;
