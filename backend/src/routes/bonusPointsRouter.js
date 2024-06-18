import express from "express";
import { getBonusPoints, updateBonusPoints } from "../controller/bonousCtrl.js";

const bonusPointsRouter = express.Router();

bonusPointsRouter.get("/:userId", getBonusPoints);
bonusPointsRouter.put("/:userId", updateBonusPoints);

export default bonusPointsRouter;
