import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/contexts/UserContext.jsx";
import { CartProvider } from "./components/contexts/CartContext.jsx";
import { CategoryProvider } from "./components/contexts/CategContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <CategoryProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoryProvider>
    </UserProvider>
  </BrowserRouter>
);
