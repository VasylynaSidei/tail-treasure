import React from "react";
import "./servicepage.css";
import { FaGift, FaShippingFast, FaHandsHelping } from "react-icons/fa";

const ServicePage = () => {
  return (
    <div className="service-parent-container">
      <h1 className="service-h1">Why Choose Us?</h1>

      <div className="service-child-container">
        <div className="service-bonus-icon">
          <FaGift size={50} color="black" />
        </div>
        <h2 className="service-h2">Bonus System</h2>
        <p className="service-p">
          Expanded loyalty system for regular customer
        </p>

        <div className="service-bonus-icon">
          <FaShippingFast size={50} color="black" />
        </div>
        <h2 className="service-h2">Free Shipping</h2>
        <p className="service-p">
          Free delivery in GERMANY from 39,99 euro Within 24 hours
        </p>

        <div className="service-bonus-icon">
          <FaHandsHelping size={50} color="black" />
        </div>
        <h2 className="service-h2">Always with Care</h2>
        <p className="service-p">
          Always with Care Compliance with internationally recognized quality
          standards
        </p>
      </div>
    </div>
  );
};

export default ServicePage;
