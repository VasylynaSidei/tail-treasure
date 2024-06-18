/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const Verifying = () => {
  const [query, setQuery] = useSearchParams();
  const userId = query.get("id");
  const token = query.get("token");
  //   const { userId, token } = useParams();
  console.log(query.get("id"));
  console.log(query.get("token"));
  console.log(query.getAll([]));
  const [verificationMessage, setVerificationMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get(`/auth/${userId}/verify/${token}`);
        setVerificationMessage(response.data.message);
        navigate("/login");
      } catch (error) {
        console.error("Verification failed:", error);
        setVerificationMessage("Verification failed. Please try again.");
      }
    };

    verifyUser();
  }, [userId, token, navigate]);

  return (
    <div>
      <h2>Verify Your Account</h2>
      <p>{verificationMessage}</p>
    </div>
  );
};

export default Verifying;
