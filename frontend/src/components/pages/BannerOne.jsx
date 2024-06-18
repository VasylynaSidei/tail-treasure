import React from "react";
import "./bannerone.css";

import { Link } from "react-router-dom";
export const BannerOne = () => {
  return (
    <div className="bannerone-background">
      <div className="container-grid">
        <div
          className="photo"
          style={{
            backgroundImage: `url(${"/Images/dog.jpg"})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h3
            className="dog"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Link
              to="/products/category/dogs"
              style={{ textDecoration: "none", color: "white" }}
            >
              For Dogs
            </Link>
          </h3>
        </div>
        <div
          className="photo"
          style={{
            backgroundImage: `url(${"/Images/hamster.jpg"})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h3
            className="hamster"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Link
              to="/products/category/rodents"
              style={{ textDecoration: "none", color: "white" }}
            >
              For Rodents
            </Link>
          </h3>
        </div>
        <div
          className="photo"
          style={{
            backgroundImage: `url(${"/Images/bird.jpg"})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h3 className="bird">
            <Link
              to="/products/category/birds"
              style={{ textDecoration: "none", color: "white" }}
            >
              For the Birds
            </Link>
          </h3>
        </div>
        <div
          className="photo"
          style={{
            backgroundImage: `url(${"/Images/cat.jpg"})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h3 className="cat">
            <Link
              to="/products/category/cats"
              style={{ textDecoration: "none", color: "white" }}
            >
              For Cats
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};
