import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
} from "../controller/favoritesController.js";
import { Router } from "express";
export const favoritesRouter = Router();

favoritesRouter.route("/:userId/favorites").get(getFavorites);

favoritesRouter.route("/:userId/favorites/:productId").post(addToFavorites);
favoritesRouter
  .route("/:userId/favorites/:productId")
  .delete(removeFromFavorites);
