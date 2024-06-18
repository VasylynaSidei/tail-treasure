/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { userReducer } from "../../../reducer/userReducer";
import {
  deleteUserById,
  fetchUserCount,
  userLoginApi,
} from "../../Helpers/fetches";
import Swal from "sweetalert2";
import { FiCloudLightning } from "react-icons/fi";
const initialState = {
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: false,
    bonusPoints: 0,
    history: [],
  },
  isAccountVerified: false,
  userCount: 0,
  isAdmin: false,
  error: null,
};
console.log(initialState);
const UserContext = createContext(initialState);
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [userCount, setUserCount] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // user data exists in local storage?
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
          dispatch({ type: "LOGIN", payload: JSON.parse(storedUserData) });
        } else {
          const userData = await userLoginApi();
          dispatch({ type: "LOGIN", payload: { user: userData } });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(state));
  }, [state]);
  const deleteUser = async (userId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this user!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (result.isConfirmed) {
        await deleteUserById(userId);
        dispatch({ type: "DELETE_USER", payload: userId });
        const count = await fetchUserCount();
        setUserCount(count);
        Swal.fire({
          title: "User Deleted",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to delete user",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  console.log("user from context:", state); //console
  return (
    <UserContext.Provider value={{ state, dispatch, deleteUser, userCount }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);
