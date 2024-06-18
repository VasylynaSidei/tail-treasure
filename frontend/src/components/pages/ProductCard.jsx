import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import "./productcard.css";

const ProductCard = ({ product }) => {
  const getCategoryLink = (category) => {
    switch (category) {
      case "dogs":
        return "/discount#dogs";
      case "cats":
        return "/discount#cats";
      case "birds":
        return "/discount#birds";
      case "rodents":
        return "/discount#rodents";
      default:
        return "/";
    }
  };

  return (
    <div className="product-container">
      <div className="card1 m-2">
        <p className="d-flex justify-content-end m-1">
          <FiHeart className="favorite1" fontSize={"1.5rem"} />
        </p>
        <div className="img-container">
          <img
            src={product.image}
            className="card-img-top1"
            alt={product.name}
          />
        </div>
        <div className="card-body1">
          <h5 className="card-title1">{product.name}</h5>
          <p className="card-text1">Price: {product.price}€</p>
          <div className="cart-btn1">
            <Link
              to={getCategoryLink(product.category)}
              className="px-2 cart-btn1"
            >
              Click Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
