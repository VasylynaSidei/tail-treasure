import React from "react";
import "./bannertwo.css";
import { useNavigate } from "react-router-dom";

const BannerTwo = () => {
  const navigate = useNavigate();

  const bannerTwoButtonClick = () => {
    navigate("/customersupportform");
  };

  return (
    <div className="background-banner-two">
      <div className="banner-container">
        <div className="bannertwo-container">
          <h1 className="banner-h1">Need Specialist Help?</h1>
          <p className="banner-p">
            Whether it's selecting the perfect meal for your furry friend or
            finding the ideal attire for a day out, we're here to provide expert
            guidance tailored to your needs.
          </p>
          <button className="bannertwo-button" onClick={bannerTwoButtonClick}>
            Back Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
