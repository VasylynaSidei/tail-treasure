

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useReducer } from "react";
import { productReducer } from "../../../reducer/productReducer.js";


export const CartContext = createContext();
const initialState = [];

export const CartProvider = ({ children }) => {
  const [productState, dispatchProduct] = useReducer(
    productReducer,
    initialState
  );

  const addProduct = (product) => {
    dispatchProduct({ type: "ADD", payload: product });
  };

  const removeProduct = (id) => {
    dispatchProduct({ type: "REMOVE", payload: id });
  };
  return (
    <CartContext.Provider value={{ productState, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
