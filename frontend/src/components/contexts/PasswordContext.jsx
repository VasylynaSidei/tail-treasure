/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useReducer } from "react";
import { passwordReducer } from "../../../reducer/passwordReducer";

const initialState = {
  user: null,
  error: false,
};

const PasswordContext = createContext(initialState);

export const PasswordProvider = ({ children }) => {
  const [state, dispatch] = useReducer(passwordReducer, initialState);

  return (
    <PasswordContext.Provider value={{ state, dispatch }}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePasswordContext = () => useContext(PasswordContext);
