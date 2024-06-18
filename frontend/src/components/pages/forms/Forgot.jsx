/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { userForgotPassword } from "../../../Helpers/fetches";
import "./forgot.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    try {
      const formData = { email };
      const response = await userForgotPassword(formData);
      if (
        response &&
        response.data &&
        response.data.userId &&
        response.data.token
      ) {
        const { userId, token } = response.data;
        Cookies.set("userId", userId);
        Cookies.set("token", token);
      }
      await Swal.fire({
        title: "Success!",
        text: "Password Reset link sent to your email.",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
      });
      setErrorMessage("");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Error sending reset link:", error);
      await Swal.fire({
        title: "Error",
        text: "Failed to send reset link: " + error.message,
        icon: "error",
        confirmButtonText: "OK",
      });

      setErrorMessage("");
    }
  };

  return (
    <div className="forgot-container">
      <h2 className="forgot-title">Forgot Password</h2>
      <div className="forgot-form">
        <input
          type="email"
          className="forgot-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="forgot-button" onClick={handleForgotPassword}>
          Send Reset Link
        </button>
        {errorMessage && <p className="forgot-error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Forgot;
