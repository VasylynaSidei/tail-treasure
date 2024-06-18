/* eslint-disable no-unused-vars */
import "./Admin.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AddCattegoryForm from "./AddCategoryForm";
import { fetchAllUsers } from "../../../Helpers/fetches";
import { fetchAllCategories } from "../../../Helpers/fetchCateg";
import { fetchProducts, fetchAllReviews } from "../../../Helpers/fetchProducts";
import {
  fetchAllMessages,
  deleteMessageById,
} from "../../../Helpers/fetchmsg.js";

const AdminMain = () => {
  const [usersCount, setUserCount] = useState([]);
  const [categoriesCount, setCategCount] = useState([]);
  const [productsCount, setProductsCount] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchAllUsers();
        setUserCount(userData.length);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesData = await fetchAllMessages();
        setMessages(messagesData);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categData = await fetchAllCategories();
        setCategCount(categData.length);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await fetchProducts();
        setProductsCount(productData.length);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchReviewsCount = async () => {
      try {
        const reviewsData = await fetchAllReviews();
        setReviewsCount(reviewsData.length);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviewsCount();
  }, []);

  const handleDeleteMessage = async (id) => {
    try {
      await deleteMessageById(id);
      setMessages(messages.filter((message) => message._id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="admin-main">
      <div className="admin-main-header">
        <div className="admin-main-card">
          <h5 className="admin-main-title">Users</h5>
          <div className="admin-main-count">{usersCount}</div>
          <div className="admin-card-link-wrapper">
            <Link className="admin-card-link" to="/admin-dashboard/users-table">
              See all users
            </Link>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-main-title">Categories</h5>
          <div className="admin-main-count">{categoriesCount}</div>
          <div className="admin-card-link-wrapper">
            <Link
              className="admin-card-link"
              to="/admin-dashboard/categories-table"
            >
              See all categories
            </Link>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-main-title">Products</h5>
          <div className="admin-main-count">{productsCount}</div>
          <div className="admin-card-link-wrapper">
            <Link
              className="admin-card-link"
              to="/admin-dashboard/products-table"
            >
              See all products
            </Link>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-main-title">Reviews</h5>
          <div className="admin-main-count">{reviewsCount}</div>
          <div className="admin-card-link-wrapper">
            <Link
              className="admin-card-link"
              to="/admin-dashboard/reviews-table"
            >
              See all reviews
            </Link>
          </div>
        </div>
      </div>
      <AddCattegoryForm />
      <div className="admin-messages">
        <h3>Support Messages</h3>
        <div className="chat-container">
          {messages.map((message) => (
            <div key={message._id} className="chat-message">
              <div className="chat-header">
                <strong>{message.name}</strong> <span>{message.email}</span>
                <span className="chat-date">
                  {new Date(message.date).toLocaleString()}
                </span>
              </div>
              <div className="chat-body">{message.message}</div>
              <button
                className="delete-btn"
                onClick={() => handleDeleteMessage(message._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
