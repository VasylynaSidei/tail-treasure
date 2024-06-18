import React, { useEffect, useState } from "react";
import axios from "axios";
import "./favorites.scss";
import { Link } from "react-router-dom";
import { MdHeartBroken } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

const Favorites = ({ messageProductId, setMessageProductId }) => {
  const [products, setProducts] = useState([]);
  const [isRemoved, setIsRemoved] = useState(false);
  const [showGoUp, setShowGoUp] = useState(false);

  const [showMessage, setShowMessage] = useState({});



  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];
    fetchFavoriteProducts(favoriteIds);
  }, [isRemoved]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowGoUp(true);
      } else {
        setShowGoUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchFavoriteProducts = async (favoriteIds) => {
    try {
      const requests = favoriteIds.map((id) => axios.get(`/products/${id}`));
      const responses = await Promise.all(requests);
      const favoriteProducts = responses.map((res) => res.data.data);
      setProducts(favoriteProducts);
    } catch (error) {
      console.error("Failed to fetch favorite products", error);
    }
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = cart.findIndex((item) => item._id === product._id);
    const isProductInCart = productIndex !== -1;

    if (!isProductInCart) {
      const newProduct = { ...product, quantity: 1 };
      cart.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));


    setShowMessage((prevMessages) => ({
      ...prevMessages,
      [product._id]: true,
    }));
    setTimeout(() => {
      setShowMessage((prevMessages) => ({
        ...prevMessages,
        [product._id]: false,
      }));

    }, 2000);
  };

  const removeFromFavorites = (productId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavorites = favorites.filter((id) => id !== productId);

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsRemoved(!isRemoved);
  };

  return (
    <div className="favorites-container">
      <div className="line">
        <a href="#" className={`go-up ${showGoUp ? "visible" : ""}`}>
          <FaArrowUp className="up-arrow" />
        </a>
      </div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="product-card card d-flex flex-row">
            <p className="m-3 p-3 img-cont">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </p>

            <div className="product-details">

              {showMessage[product._id] && (
             

                <div className="alert alert-success mt-2" role="alert">
                  Added to cart!
                </div>
              )}
              <h4 className="m-3">{product.name}</h4>
              <p className="m-3">Price: {product.price}€</p>
              <p className="d-flex justify-content-between m-3">
                <button onClick={() => removeFromFavorites(product._id)}>
                  Remove
                </button>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="card empty-favorite">
          <p>
            <MdHeartBroken className="brocken-heart" />
          </p>
          <p>No favorites added yet!</p>
          <button className="back-to-prod">
            <Link to="/products">Go to Products</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
