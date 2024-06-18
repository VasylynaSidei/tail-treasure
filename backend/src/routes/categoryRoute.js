import express from "express";
import {
  createCategoryCtrl,
  getAllCategoriesCtrl,
  deleteCategoryCtrl,
  updateCategoryCtrl,
} from "../controller/categoryCtr.js";
import { verifyTokenAndAdmin } from "../middlewares/veryfyToken.js";
import { validateCategory } from "../middlewares/categoryValidation.js";

const categoryRoute = express.Router();

//                                                                Route for creating a new category=> Amin

categoryRoute.post(
  "/",
  verifyTokenAndAdmin,
  validateCategory,
  createCategoryCtrl
);

//                                                                Route for getting all categorie=> everyone
categoryRoute.get("/", getAllCategoriesCtrl);

//                                        Route for upd  category by id=> admin
categoryRoute.put("/:id", verifyTokenAndAdmin, updateCategoryCtrl);

//                                                                 Route for deleting a category by ID => Admin
categoryRoute.delete("/:id", verifyTokenAndAdmin, deleteCategoryCtrl);

export default categoryRoute;
