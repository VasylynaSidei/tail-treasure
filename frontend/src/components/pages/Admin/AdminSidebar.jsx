/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./Admin.css";
import React from "react";

const AdminSideBar = () => {
  return (
    <div className="admin-sidebar">
      <Link to="/admin-dashboard" className="admin-sidebar-title">
        Dashboard
      </Link>
      <ul className="admin-dashboard-list">
        <Link className="admin-sidebar-link" to="/admin-dashboard/users-table">
          Users
        </Link>
      </ul>
      <ul className="admin-dashboard-list">
        <Link
          className="admin-sidebar-link"
          to="/admin-dashboard/categories-table"
        >
          Categories
        </Link>
      </ul>
      <ul className="admin-dashboard-list">
        <Link
          className="admin-sidebar-link"
          to="/admin-dashboard/products-table"
        >
          Products
        </Link>
      </ul>
      <ul className="admin-dashboard-list">
        <Link
          className="admin-sidebar-link"
          to="/admin-dashboard/reviews-table"
        >
          Reviews
        </Link>
      </ul>
    </div>
  );
};

export default AdminSideBar;
