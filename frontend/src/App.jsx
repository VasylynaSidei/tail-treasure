import "./App.css";

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/pages/forms/Register.jsx";
import Terms from "./components/pages/Terms";
import Login from "./components/pages/forms/Login";
import Reset from "./components/pages/forms/Reset";
import Forgot from "./components/pages/forms/Forgot";
import Profile from "./components/pages/Profile.jsx";

import CustomerSupportForm from "./components/pages/CustomerSupportForm.jsx";
import { Product } from "./components/pages/Product/Product";
import NotFound from "./components/pages/NotFound";
import ProductPage from "./components/pages/ProductPage/ProductPage";

import Navbar from "./components/Navbar";
import Discount from "./components/pages/Discount";

// import Headroom from "react-headroom";
import { HideNavBar } from "./components/hidenavbar/HideNavBar.jsx";
import Cart from "./components/pages/cart/Cart";
import { Home } from "./components/pages/Home";
import Favorites from "./components/pages/Favorites/Favorites.jsx";

import Verifying from "./components/pages/forms/VeryfyingUser.jsx";
import AdminDashboard from "./components/pages/Admin/AdminDashboard.jsx";
import UsersTable from "./components/pages/Admin/UsersTable.jsx";
import CategoriesTable from "./components/pages/Admin/CategoriesTable.jsx";
import ProductsTable from "./components/pages/Admin/ProductsTable.jsx";
import ReviewTable from "./components/pages/Admin/ReviewTable.jsx";
import axios from "axios";
import { FooterPage } from "./components/pages/FooterPage";

import { ProductsCatalog } from "./components/pages/Product/ProdactsCatalog.jsx";
import CartProcess from "./components/pages/cart/CartProcess.jsx";

import { useUserContext } from "./components/contexts/UserContext.jsx";
// import ProfileSidebar from "./components/pages/profileSidebar/ProfileSidebar.jsx";

axios.defaults.baseURL = import.meta.env.VITE_BACKENDURL;
function App() {
  const { state } = useUserContext();
  const { user } = state;

  console.log("App check if user is admin:", user);
  return (
    <>
      <HideNavBar>
        <Navbar />
      </HideNavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin-dashboard"
          element={user?.isAdmin ? <AdminDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/admin-dashboard/users-table"
          element={user?.isAdmin ? <UsersTable /> : <Navigate to="/" />}
        />
        <Route
          path="/admin-dashboard/reviews-table"
          element={user?.isAdmin ? <ReviewTable /> : <Navigate to="/" />}
        />
        <Route
          path="/admin-dashboard/products-table"
          element={<ProductsTable />}
        />
        <Route path="/footer-page" element={<FooterPage />} />

        <Route
          path="/admin-dashboard/categories-table"
          element={user?.isAdmin ? <CategoriesTable /> : <Home />}
        />
        <Route path="/customersupportform" element={<CustomerSupportForm />} />
        <Route
          path="/profile/:userId"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        {/* <Route path="/profile-sidebar" element={<ProfileSidebar />} /> */}

        <Route path="/discount" element={<Discount />} />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/terms" element={<Terms />} />
        <Route
          path="/auth/:userId/verify/:token"
          element={!user ? <Verifying /> : <Navigate to="/" />}
        />

        <Route path="/reset" element={<Reset />} />
        <Route path="/forgot/" element={<Forgot />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/products" element={<ProductsCatalog />} />
        <Route path="/products/category/:category" element={<Product />} />
        <Route path="/products/:productID" element={<ProductPage />} />

        <Route path="/products/:userId/favorites" element={<Favorites />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/logout/" element={<Login />} />
        {/* <Route path="*" element={<FooterPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
