/* eslint-disable no-unused-vars */
import "./Admin.css";
import React from "react";
import AdminMain from "./AdminMain";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminMain />
      <AdminSidebar />
    </div>
  );
};

export default AdminDashboard;
