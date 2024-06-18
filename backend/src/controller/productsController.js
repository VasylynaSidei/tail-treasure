import { Product } from "../models/ProductModel.js";

export const getAllProducts = async (req, res, next) => {
  try {
    console.log("Fetching all products...");
    const products = await Product.find({});
    console.log("Products fetched:", products);
    res.json({
      message: "Success",
      length: products.length,
      data: products.map((product) => ({
        ...product.toObject(),
        isFeatured: product.isFeatured,
      })),
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findById(productId);

    if (!product) {
      const err = new Error("Product does not exist");
      err.status = 404;
      return next(err);
    }

    res.json({
      message: "Success",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const addProduct = async (req, res, next) => {
  const { body } = req;
  try {
    const product = await Product.create(body);

    res.status(201).json({ message: "Success", data: product });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  const { productId } = req.params;
  const { body } = req;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, body, {
      new: true,
    });

    if (!updatedProduct) {
      const err = new Error("Product not found");
      err.status = 404;
      return next(err);
    }

    res.json({
      message: "Success",
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      const err = new Error("Product not found");
      err.status = 404;
      return next(err);
    }

    res.json({
      message: "Success",
      data: deletedProduct,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductsByCategory = async (req, res, next) => {
  try {
    const category = req.query.category;
    const filter = category ? { category } : {};
    const products = await Product.find(filter);
    res.json({
      message: "Success",
      length: products.length,
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products by category:", error);
    next(error);
  }
};
export const getFeaturedProducts = async (req, res, next) => {
  try {
    const featuredProducts = await Product.find({ isFeatured: true });
    res.json({
      message: "Success",
      length: featuredProducts.length,
      data: featuredProducts,
    });
  } catch (error) {
    next(error);
  }
};
