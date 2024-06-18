import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getFeaturedProducts,
  getProduct,
  getProductsByCategory,
  updateProduct,
} from "../controller/productsController.js";
const productsRouter = Router();
productsRouter.route("/products").get(getAllProducts).post(addProduct);
productsRouter.route("/products/category").get(getProductsByCategory);
productsRouter.route("/products/featured").get(getFeaturedProducts);
productsRouter
  .route("/:productId")
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);
export default productsRouter;
