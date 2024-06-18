import axios from "axios";
import Swal from "sweetalert2";

axios.defaults.baseURL = "http://localhost:5000";

export const fetchProducts = async () => {
  try {
    const { data } = await axios.get("/products/products");
    return data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await axios.delete(`/products/${productId}`);
      Swal.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    Swal.fire({
      title: "Error",
      text: "Failed to delete product",
      icon: "error",
      confirmButtonText: "OK",
    });
    throw error;
  }
};

export const addProduct = async (newProduct) => {
  try {
    if (!newProduct.name.trim()) {
      Swal.fire({
        title: "Error",
        text: "Please enter a valid product name",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const validCategories = ["dogs", "cats", "rodents", "birds"];
    if (!validCategories.includes(newProduct.category.toLowerCase())) {
      Swal.fire({
        title: "Error",
        text: "Invalid category. Please choose from dogs, cats, rodents, birds",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    if (newProduct.price <= 0 || newProduct.quantity <= 0) {
      Swal.fire({
        title: "Error",
        text: "Price and Quantity must be greater than zero",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    await axios.post("/products/products", newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const editProduct = async (productId, updatedProduct) => {
  try {
    if (updatedProduct.price <= 0 || updatedProduct.quantity <= 0) {
      Swal.fire({
        title: "Error",
        text: "Price and Quantity must be greater than zero",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    await axios.put(`/products/${productId}`, updatedProduct);
  } catch (error) {
    console.error("Error editing product:", error);
    throw error;
  }
};

//** fetch all reviews */

export const fetchAllReviews = async () => {
  try {
    const { data } = await axios.get("/reviews/product");
    console.log("dta:", data.data);
    return data.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

export const updateReview = async (reviewId, updatedData) => {
  try {
    const response = await axios.put(`/reviews/${reviewId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating review:", error);
    throw error;
  }
};
