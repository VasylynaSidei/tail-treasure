import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    console.log("logut:");
  };
  return (
    <div>
      <p>You have been successfully logged out.</p>
      <Link onClick={logoutHandler} to="#">
        logout
      </Link>
    </div>
  );
};

export default Logout;
