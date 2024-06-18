/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

import React, { createContext, useContext, useReducer } from "react";
import { categoryReducer } from "../../../reducer/categReducer.js";
import { deleteCategoryById } from "../../Helpers/fetchCateg.js";
const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const initialState = {
    categories: [],
  };

  const [state, dispatch] = useReducer(categoryReducer, initialState);

  const deleteCategory = async (categoryId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this category!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
        dangerMode: true,
      });

      if (result.isConfirmed) {
        await deleteCategoryById(categoryId);
        dispatch({ type: "DELETE_CATEGORY", payload: categoryId });
        Swal.fire({
          title: "Category Deleted",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        return true;
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to delete category",
        icon: "error",
        confirmButtonText: "OK",
      });
      return false;
    }
  };

  return (
    <CategoryContext.Provider value={{ state, dispatch, deleteCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => useContext(CategoryContext);
