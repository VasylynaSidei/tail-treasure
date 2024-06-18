/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./slider.css";
import { Link } from "react-router-dom";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Slider = ({ items }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const clickHandler = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider-container">
      <BsChevronDoubleLeft
        onClick={() => clickHandler("left")}
        className="arrow-left"
      />
      <div
        style={{ transform: `translate(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        {items.map((item, index) => (
          <div className="slide" key={index}>
            <div className="slide-img-wrapper">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="slide-info-wrapper">
              <h2 className="slide-info-title">{item.name}</h2>
              <p className="slide-info-desc">Price: {item.price}€</p>
              <Link to={`/products/${item._id}`} className="cart-btn1">
                Click Here
              </Link>
            </div>
          </div>
        ))}
      </div>
      <BsChevronDoubleRight
        onClick={() => clickHandler("right")}
        className="arrow-right"
      />
    </div>
  );
};

export default Slider;
