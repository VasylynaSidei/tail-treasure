/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <div>
      <h3> ooops 404!! the page not found</h3>
      <p>you will be redirect automatically in 5 seconds...</p>
    </div>
  );
};

export default NotFound;
