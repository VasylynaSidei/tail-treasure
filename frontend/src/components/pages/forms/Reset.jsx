/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { userResetPassword } from "./../../../Helpers/fetches";
import { useNavigate } from "react-router-dom";
import "./reset.css";

const Reset = () => {
  const [query, setQuery] = useSearchParams();
  const id = query.get("id");
  const token = query.get("token");
  console.log(query.get("id"));
  console.log(query.get("token"));
  console.log(query.getAll([]));
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  console.log("USERID:", id, token);
  const handleResetPassword = async () => {
    try {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        setSuccessMessage("");
        return;
      }

      await userResetPassword({ userId: id, token, password });
      setSuccessMessage("Password reset successfully!");
      setErrorMessage("");
      navigate("/login");
    } catch (error) {
      console.error("Error sending reset link:", error);
      setErrorMessage("Failed to send reset link: " + error.message);
      setSuccessMessage("");
    }
  };

  return (
    <div className="container-reset">
      <h2 className="reset-title">Reset Password</h2>
      <div className="reset-box">
        <input
          type="password"
          className="reset-field"
          placeholder="Enter your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="reset-field"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="reset-button" onClick={handleResetPassword}>
          Reset Password
        </button>
        {errorMessage && <p className="reset-error-message">{errorMessage}</p>}
        {successMessage && (
          <p className="reset-success-message">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Reset;
