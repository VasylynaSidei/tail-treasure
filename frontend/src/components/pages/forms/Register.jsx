/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./register.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { userRegisterApi } from "../../../Helpers/fetches";
import { useUserContext } from "../../contexts/UserContext";
import Swal from "sweetalert2";

function Register() {
  const { dispatch } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      if (password !== confirmPassword) {
        console.error("Passwords do not match");
        return;
      }

      const formData = {
        firstName,
        lastName,
        email,
        password,
      };

      dispatch({ type: "REGISTER_USER_START" });

      const user = await userRegisterApi(formData);

      dispatch({ type: "REGISTER_USER_SUCCESS", payload: user });

      Swal.fire({
        title: "Success!",
        text: "You have registered successfully. Please verify your email.",
        icon: "success",
        confirmButtonText: "OK",
      });

      setTimeout(() => {
        navigate("/login");
      }, 3000);

      console.log("User registered successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Registration failed:", error);
      dispatch({ type: "REGISTER_USER_FAILURE", payload: error.message });

      Swal.fire({
        title: "Error!",
        text: "Registration failed. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <div className="register-container" id="register">
          <div className="top">
            <h1>Welcome to Tail Treasure </h1>
            <header>
              Create an account or
              <NavLink
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "#800080",
                  marginLeft: "10px",
                }}
              >
                Login
              </NavLink>{" "}
            </header>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                className="input-field-register"
                placeholder="Firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                className="input-field-register"
                placeholder="Lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                className="input-field-register"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {email && !/^\S+@\S+\.\S+$/.test(email) && (
                <p className="error-text">Invalid email format</p>
              )}
            </div>

            <div className="input-box">
              <input
                type="password"
                className="input-field-register"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                className="input-field-register"
                placeholder="Repeat Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {confirmPassword && confirmPassword !== password && (
                <p className="error-text">Passwords do not match</p>
              )}
            </div>

            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="register-check" />
                <label htmlFor="register-check">
                  <p>
                    I don't want to receive promotional emails from Tail
                    Treasure
                  </p>
                </label>
              </div>
              <div className="two">
                <p>
                  By Clicking the "Register" button , you are creating a Tail
                  Treasure account, and you are agree to Tail Treasure's
                  <label>
                    <Link to="/terms">Terms & conditions </Link>
                  </label>
                </p>
              </div>
            </div>

            <div className="input-box">
              <input
                type="submit"
                className="submit"
                value={loading ? "Loading..." : "Register"}
                disabled={
                  loading ||
                  !firstName ||
                  !lastName ||
                  !email ||
                  !password ||
                  !confirmPassword ||
                  confirmPassword !== password
                }
              />
            </div>
          </form>
        </div>

        <motion.div
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="image-box"
        >
          <img src="/Images/background.png" alt="background" />
        </motion.div>
      </div>
    </div>
  );
}

export default Register;
