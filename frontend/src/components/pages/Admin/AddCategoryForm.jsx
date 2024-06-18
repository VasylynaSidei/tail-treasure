/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AddCategoryForm = () => {
  const [title, setTitle] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const token = localStorage.getItem("token");

      axios.defaults.withCredentials = true;
      const response = await axios.post(
        "/categories",
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
    } catch (error) {
      console.error("Error adding category:", error.message);
    }
  };

  return (
    <div className="add-category">
      <h6 className="add-category-title">Add New Category</h6>
      <form onSubmit={formSubmitHandler}>
        <div className="add-category-form-group">
          <label htmlFor="title">Category Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter Category Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="add-category-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
