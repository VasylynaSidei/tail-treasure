/* eslint-disable no-useless-catch */
import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "http://localhost:5000";

export const fetchAllUsers = async () => {
  try {
    axios.defaults.withCredentials = true;
    const token = localStorage.getItem("token");
    console.log("Token from cookies:", token);
    const response = await axios.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserCount = async () => {
  try {
    const response = await axios.get("/users/count");
    return response.data.count;
  } catch (error) {
    throw error;
  }
};

export const deleteUserById = async (userId) => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const userRegisterApi = async (formData) => {
  try {
    await axios.post("/auth/register", formData);
  } catch (error) {
    console.error("Error in userRegisterApi:", error);
    throw error;
  }
};

export const userLoginApi = async (loginObj) => {
  try {
    return await axios.post("/auth/login", loginObj);
  } catch (error) {
    console.error("Error in userLoginApi:", error);
    throw error;
  }
};

export const userForgotPassword = async (formData) => {
  try {
    await axios.post("/reset/reset", formData);
  } catch (error) {
    console.error("Error in userForgotPassword:", error);
    throw error;
  }
};

export const userResetPassword = async ({ userId, token, password }) => {
  try {
    await axios.post(`/reset/${userId}/reset/${token}`, { password });
  } catch (error) {
    console.error("Error in userResetPassword:", error);
    throw error;
  }
};

export const fetchUserById = async (userId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/** ordering */
export const makePurchase = async (orderDetails) => {
  try {
    // const token = localStorage.getItem("token");

    // console.log("Token:", token);
    const response = await axios.post("/purchase/purchase", orderDetails);
    return response.data;
  } catch (error) {
    console.error("Error in makePurchase:", error);
    throw error;
  }
};

export const fetchPurchaseHistory = async (userId) => {
  try {
    const response = await axios.get(`/purchase/history/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
