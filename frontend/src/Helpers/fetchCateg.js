/* eslint-disable no-useless-catch */

import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "http://localhost:5000";

export const fetchAllCategories = async () => {
  try {
    const response = await axios.get("/categories");
    console.log("categories from fetch:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategoryById = async (categoryId) => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`/categories/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (categoryData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post("/categories", categoryData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
