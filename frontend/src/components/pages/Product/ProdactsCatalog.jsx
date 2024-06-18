// Product.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.scss";
import { ProductItem } from "./ProductItem";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { FaArrowUp } from "react-icons/fa6";
export const ProductsCatalog = () => {
  const [products, setProducts] = useState([]);
  const [showGoUp, setShowGoUp] = useState(false);

  //   const { category } = useParams();

  useEffect(() => {
    // getAllProductsByCategory();
    getAllProducts();
  }, []);
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
  //   const getAllProductsByCategory = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `http://localhost:5000/products/products/category?category=${category}`
  //       );

  //       setProducts(data.data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/products/products");
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log({ products });
  return (
    <div className="line">
      <a href="#" className={`go-up ${showGoUp ? "visible" : ""}`}>
        <FaArrowUp className="up-arrow" />
      </a>
      <div className="Product">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem product={product} key={product._id} />
          ))
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="rgb(245, 185, 73)"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle
              wrapperClass
            />
            {/* <div className="line"> </div> */}
            <div>Loading</div>
          </div>
        )}
      </div>
    </div>
  );
};
