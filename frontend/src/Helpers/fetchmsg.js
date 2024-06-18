/* eslint-disable no-useless-catch */

import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export const fetchAllMessages = async () => {
  try {
    const response = await axios.get("/support");
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMessageById = async (messageId) => {
  try {
    await axios.delete(`/support/${messageId}`);
  } catch (error) {
    throw error;
  }
};
