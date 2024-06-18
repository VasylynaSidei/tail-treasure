import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ProductItem = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [showMessage, setShowMessage] = useState(false);
  const toggleFavorite = (productId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log(favorites);
    if (isFavorite) {
      console.log({ favorites });
      const filteredFavorites = favorites.filter((id) => id !== productId);
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      setIsFavorite(false);
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, productId])
      );
      setIsFavorite(true);
    }
  };
  const incrementItemCountInCart = (prevCart, productInCart) => {
    const newCart = prevCart.map((item) => {
      if (item._id === productInCart._id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const addNewItemToCart = (prevCart, product) => {
    const newCart = [...prevCart, { ...product, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    // console.log(prevCart);
    // console.log(newCart);
    // console.log(product);
  };

  const addProductToCart = (product) => {
    const productInCart = cart.find((p) => p._id === product._id);
    // const isProductInCart = !!productInCart;
    if (productInCart) {
      // Product exists, update quantity
      incrementItemCountInCart(cart, productInCart);
    } else {
      // Product does not exist, add new with quantity 1
      addNewItemToCart(cart, product);
    }
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  // const incrementItemCountInCart = (prevCart, currentProductInCart) => {
  //   const newCart = prevCart.map((item) => {
  //     if (item.id === currentProductInCart.id) {
  //       return { ...item, quantity: item.quantity + 1 };
  //     } else {
  //       return item;
  //     }
  //   });
  //   // console.log("Previous cart:", prevCart);
  //   // console.log("New cart:", newCart);
  //   localStorage.setItem("cart", JSON.stringify(newCart));
  //   setCart(newCart);
  // };

  // const addNewItemToCart = (prevCart, product, quantity) => {
  //   const newCart = [...prevCart, { ...product, quantity }];
  //   // console.log("Previous cart:", prevCart);
  //   // console.log("New cart:", newCart);
  //   localStorage.setItem("cart", JSON.stringify(newCart));
  //   setCart(newCart);
  // };

  // const addProductToCart = (productID) => {
  //   // console.log("Quantity received:", quantity); // Check what value is received
  //   const currentProductInCart = cart.find(
  //     (p) => p.id === productID // Check for product ID equality
  //   );
  //   if (currentProductInCart) {
  //     // Product exists, update quantity
  //     incrementItemCountInCart(cart, currentProductInCart);
  //   } else {
  //     // Product does not exist, add new
  //     addNewItemToCart(cart, currentProductInCart, quantity);
  //   }
  // };
  return (
    <div className="card m-4" key={product._id} style={{ width: "20rem" }}>
      <p className="d-flex justify-content-end m-1">
        {isFavorite ? (
          <FaHeart
            onClick={() => toggleFavorite(product._id)}
            className="favorite active"
            fontSize="1.5rem"
          />
        ) : (
          <FiHeart
            onClick={() => toggleFavorite(product._id)}
            className="favorite"
            fontSize="1.5rem"
          />
        )}
      </p>
      <Link to={`/products/${product._id}`}>
        <img
          src={product.image}
          style={{ width: "250px", display: "block", margin: "auto" }}
          className="card-img-top"
          alt={product.name}
        />
      </Link>
      <div className="card-body">
        <Link className="prod-link" to={`/products/${product._id}`}>
          <h5 className="card-title">{product.name}</h5>
        </Link>
        <p className="card-text" style={{ textAlign: "right" }}>
          Price: {product.price}€
        </p>
        <div className="">
          <button
            className="px-2 cart-btn"
            onClick={() => addProductToCart(product)}
          >
            <FaCartPlus className="faCart" /> ADD TO CART
          </button>
          {showMessage && (
            <div className="alert alert-success mt-2" role="alert">
              Added to cart!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
