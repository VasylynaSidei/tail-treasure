import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import "./productPage.css";
import "./productPage.scss";
import { FaArrowUp, FaCartPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { IoPawOutline } from "react-icons/io5";
import { CartContext } from "../../contexts/CartContext";
import { useUserContext } from "../../contexts/UserContext";
import { FaHeart } from "react-icons/fa";
import { PiStarFill } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import { RotatingLines } from "react-loader-spinner";

const ProductPage = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewInput, setReviewInput] = useState("");
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [showGoUp, setShowGoUp] = useState(false);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 320 || window.innerWidth <= 768
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
  const [isClicked, setIsClicked] = useState(false);

  const handleShow = () => {
    setIsClicked(!isClicked);
  };

  // this is for responsive
  // const [user, setUser] = useState(null);
  const [quantity, setQuantity] = useState(1);
  // const { addProduct, removeProduct } = useContext(CartContext);
  const { state: userState } = useUserContext();
  // const addProductHandler = (product) => addProduct(product);
  // const removeProductHandler = () => removeProduct(productID);
  const [isFavorite, setIsFavorite] = useState(false);

  const user = {
    firstName: userState.user?.firstName,
    lastName: userState.user?.lastName,
  };
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(productID));
    getProduct();
    getReviews();
    // getTheUser();
  }, []);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        // "http://localhost:5000/products/66278214b4daa788fb4e131a"
        `/products/${productID}`
      );
      console.log(data);
      setProduct(data.data);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };
  const getReviews = async () => {
    try {
      const { data } = await axios.get(`/reviews/product/${productID}`);
      setReviews(data.data);
    } catch (error) {
      console.log("Error fetching reviews:", error);
    }
  };

  const addReviewHandler = async () => {
    console.log({ userState });
    try {
      await axios.post(`/reviews/product`, {
        comment: reviewInput,
        productId: productID,
        userId: userState.user.id,
      });
      // Refresh reviews after adding a new one
      getReviews();
      // Clear the review input field
      setReviewInput("");
    } catch (error) {
      console.log("Error adding review:", error);
    }
  };
  // const getTheUser = async () => {
  //   try {
  //     const userId = userState.user.id;
  //     const { data } = await axios.get(`http://localhost:5000/users/${userId}`);
  //     console.log(data);
  //     setUser({
  //       firstName: userState.user.firstName,
  //       lastName: userState.user.lastName,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // // console.log(user);
  // console.log(user.firstName);
  // console.log(user.lastName);
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const filteredFavorites = favorites.filter((id) => id !== productID);
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      setIsFavorite(false);
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, productID])
      );
      setIsFavorite(true);
    }
  };
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const incrementItemCountInCart = (prevCart, currentProductInCart) => {
    const newCart = prevCart.map((item) => {
      if (item.id === currentProductInCart.id) {
        return { ...item, quantity: item.quantity + quantity };
      } else {
        return item;
      }
    });
    // console.log("Previous cart:", prevCart);
    // console.log("New cart:", newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const addNewItemToCart = (prevCart) => {
    const newCart = [...prevCart, { ...product, quantity }];
    // console.log("Previous cart:", prevCart);
    // console.log("New cart:", newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const addProductToCart = (productID) => {
    // console.log("Quantity received:", quantity); // Check what value is received
    const productInCart = cart.find(
      (p) => p._id === productID // Check for product ID equality
    );
    const isProductInCart = !!productInCart;
    if (isProductInCart) {
      // Product exists, update quantity
      incrementItemCountInCart(cart, productInCart);
    } else {
      // Product does not exist, add new
      addNewItemToCart(cart);
    }
  };
  // const addProductToCart = (product) => {
  //   const existingProduct = cart.find((p) => p.id === product.id);
  //   if (existingProduct) {
  //     const updatedCart = cart.map((p) =>
  //       p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
  //     );
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   } else {
  //     const updatedCart = [...cart, { ...product, quantity: 1 }];
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   }
  // };
  // console.log(localStorage.getItem("cart"));

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 4);

  return (
    <div className="line">
      <a href="#" className={`go-up ${showGoUp ? "visible" : ""}`}>
        <FaArrowUp className="up-arrow" />
      </a>
      <div className="prod-container">
        {product ? (
          <div className="card">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column cont-img">
                <p className=" d-flex justify-content-end m-1">
                  {isFavorite ? (
                    <FaHeart
                      onClick={toggleFavorite}
                      className="favorite active"
                      fontSize="1.5rem"
                    />
                  ) : (
                    <FiHeart
                      onClick={toggleFavorite}
                      className="favorite"
                      fontSize="1.5rem"
                    />
                  )}
                </p>
                <img src={product.image} className="d-block" />
              </div>
              <div className="prod-text">
                <h1 className="prod-title"> {product.name}</h1>
                <p>Price: {product.price}€</p>

                <div className=" d-flex justify-content-between flex-column ">
                  <div className="cont-quant d-flex ">
                    <button
                      onClick={decrementQuantity}
                      className=" quantity"
                      style={{
                        height: "40px",
                        backgroundColor: " rgb(245, 185, 73)",
                        fontSize: "1.5rem",
                      }}
                    >
                      -
                    </button>
                    <p className="quantity " style={{ color: "black" }}>
                      {quantity}
                    </p>
                    <button
                      onClick={incrementQuantity}
                      className=" quantity"
                      style={{
                        height: "40px",
                        backgroundColor: " rgb(245, 185, 73)",
                        fontSize: "1.5rem",
                      }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => addProductToCart(productID)}
                    style={{ fontSize: "1.4rem" }}
                    className="  cart-btn"
                    // style={{
                    //   backgroundColor: " rgb(245, 185, 73)",
                    //   fontSize: "1.3rem",
                    //   width: "20rem",
                    //   marginLeft: "0",
                    //   position: "absolute",
                    //   right: "0",
                    //   opacity: "0",
                    // }}
                  >
                    <FaCartPlus /> ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="desc-cont">
                  {isMobile ? (
                    <div>
                      {isClicked ? (
                        <div>
                          <h3>Description</h3>
                          <p> {product.description}</p>
                          <span style={{ color: "blue" }} onClick={handleShow}>
                            Read less
                          </span>
                        </div>
                      ) : (
                        <>
                          <h3>Description</h3>
                          <span style={{ color: "blue" }} onClick={handleShow}>
                            Read more..
                          </span>
                        </>
                      )}
                    </div>
                  ) : (
                    <p className="description">
                      <h3>Description</h3>
                      {product.description}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <h3>Reviews</h3>
                <div>
                  {userState.isAccountVerified ? (
                    <div>
                      <textarea
                        value={reviewInput}
                        onChange={(e) => setReviewInput(e.target.value)}
                        cols="60"
                        rows="5"
                      ></textarea>
                      <button
                        className="sub-button-pro"
                        onClick={addReviewHandler}
                      >
                        Submit
                      </button>
                    </div>
                  ) : (
                    <p>Please log in to add a review</p>
                  )}
                </div>
                {reviews.length > 0 ? (
                  <div>
                    {visibleReviews.map((review) => (
                      <div className="cont-review" key={review._id}>
                        <div className="d-flex justify-content-between review-cont-name">
                          <h5 className="review-name">
                            {review.user.firstName} {review.user.lastName}
                          </h5>
                          <p className="">
                            {" "}
                            {new Date(review.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              }
                            )}
                          </p>
                        </div>
                        {new Array(5)
                          .fill("<PiStarFill />")
                          .map((star, index) => {
                            return (
                              <span
                                key={index}
                                className="star"
                                style={{
                                  backgroundColor:
                                    index < review.rating ? "yellow" : "white",
                                }}
                              ></span>
                            );
                          })}
                        <p>{review.comment}</p>
                        <p>{review.rating}</p>
                        {review.adminComment && (
                          <div className="admin-reply">
                            <strong>Admin:</strong>
                            <p>{review.adminComment}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No reviews yet</p>
                )}
                {!showAllReviews && reviews.length > 4 && (
                  <button
                    className="see-all-btn"
                    onClick={() => setShowAllReviews(true)}
                  >
                    See All
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              {" "}
              <p>
                <RotatingLines
                  visible={true}
                  height="96"
                  width="96"
                  color="orange"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </p>
              {/* <div className="line"> </div> */}
              <div>Loading</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
