import React, { useState, useEffect } from "react";
// import CartDelivery from "./CartDelivery";
// import CartPayment from "./CartPayment";
import { Steps } from "./constants.js";
// import Stepper from "./Stepper.jsx";
import { Link } from "react-router-dom";

function CartProcess({
  cartItems,
  incrementQuantity,
  decrementQuantity,
  calculateTotal,
  finalTotal,
  goTo,
  isRemoved,
  setIsRemoved,
}) {
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCartItems(storedCart);
  // }, []);

  // const updateCartInLocalStorage = (items) => {
  //   localStorage.setItem("cart", JSON.stringify(items));
  //   setCartItems(items);
  // };

  // const incrementQuantity = (id) => {
  //   const newCart = cartItems.map((item) => {
  //     console.log(id, item._id);
  //     return item._id === id ? { ...item, quantity: item.quantity + 1 } : item;
  //   });
  //   updateCartInLocalStorage(newCart);
  // };

  // const decrementQuantity = (id) => {
  //   const newCart = cartItems.map((item) => {
  //     return item._id === id
  //       ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
  //       : item;
  //   });
  //   updateCartInLocalStorage(newCart);
  // };

  // const calculateTotal = () => {
  //   return cartItems
  //     .reduce((total, item) => total + item.quantity * item.price, 0)
  //     .toFixed(2);
  // };
  const total = calculateTotal();

  const shippingCost = calculateTotal() > 39.99 ? 0 : 4.99;
  const shipping = total > 40 ? 0 : shippingCost;
  // const finalTotal = parseFloat(total) + parseFloat(shipping);
  // const shippingMessage =
  //   calculateTotal() > 40
  //     ? "Free Shipping: 0"
  //     : `Shipping Cost: ${shippingCost}`;
  if (cartItems.length === 0) {
    return (
      <div className="card text-center p-5">
        <img
          className="empty-cart-img"
          src="https://www.godinein.com/assets/frontend/default/images/empty-cart.png"
          alt=""
        />
        <p className="empty-cart">Your cart is empty.</p>{" "}
        <Link className="back-to-prod" to="/products">
          Go to Products
        </Link>
      </div>
    );
  }

  const removeFromCart = (productId) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = cart.filter((item) => item._id !== productId);

    localStorage.setItem("cart", JSON.stringify(newCart));
    setIsRemoved(!isRemoved);
  };
  // const [orderDetails, setOrderDetails] = useState({
  //   delivery: {},
  //   payment: {},
  //   items: [], // Assume cart items are stored here
  // });

  // const goToNextStep = () => {
  //   setStep(step + 1); // Move to next step
  // };
  // const goTo = (step, details = {}) => {
  //   // setOrderDetails((prev) => ({ ...prev, ...details }));
  //   setStep(step);
  // };
  // const goToPreviousStep = () => {
  //   setStep(step - 1); // Move back to previous step
  // };

  // const renderStep = () => {
  //   switch (step) {
  //     case Steps.first:
  //       return <Cart step={step} goTo={goTo} />;
  //     case Steps.second:
  //       return (
  //         <CartDelivery
  //           // onNext={(details) => goTo(Steps.third, { delivery: details })}
  //           goTo={goTo}
  //         />
  //       );
  //     case Steps.third:
  //       return (
  //         <CartPayment
  //           goTo={goTo}
  //           // onNext={(details) => goTo(Steps.fourth, { payment: details })}
  //         />
  //       );
  //     case Steps.fourth:
  //       return (
  //         <CartConfirm
  //           details={orderDetails}
  //           // onConfirm={() => goTo(Steps.fifth)}
  //           // onBack={() => goTo(Steps.third)}
  //         />
  //       );
  //     case Steps.fifth:
  //       return <CartPlacedOrder onNext={goTo} />;

  //     default:
  //       return <div>Unknown step</div>;
  //   }
  // };
  const nextStep = () => {
    goTo(Steps.second);
  };
  return (
    <>
      <div className="card">
        {cartItems.map((item) => (
          <div key={item._id} className="cart-item d-flex flex-row">
            <p className="m-0 img-container m-sm-2 m-md-3 m-lg-3 m-xl-3 m-xxl-3">
              <img src={item.image} alt={item.name} className="product-image" />
            </p>

            <div className=" cont-quant-title m-0 m-sm-2 m-md-3 m-lg-3 m-lg-3 m-xl-3 m-xxl-3">
              <h4 className="mx-0 mx-sm-3 mx-md-3 mx-lg-3 mx-xl-3 mx-xxl-3 cart-prod-name ">
                {item.name}
              </h4>
              <p className="m-0  m-sm-2 m-md-3 m-lg-3 m-lg-3 m-xl-3 m-xxl-3 my-2 price-cont">
                Price: {item.price}€
              </p>
              <div className="quantity-controls d-flex justify-content-around justify-content-md-between justify-content-sm-between justify-content-lg-between justify-content-xl-between justify-content-xxl-between">
                <p className="quant-btn">
                  <button
                    className="p-md-2 m-md-3 p-sm-0 m-sm-0 p-lg-2 m-lg-3 m-lg-3 m-xl-3 m-xxl-3"
                    onClick={() => decrementQuantity(item._id)}
                  >
                    -
                  </button>
                  <span className="quant-span "> {item.quantity} </span>
                  <button
                    className="p-md-2 m-md-3 p-sm-0 m-sm-0 p-lg-2 m-lg-3 m-lg-3 m-xl-3 m-xxl-3"
                    onClick={() => incrementQuantity(item._id)}
                  >
                    +
                  </button>
                </p>

                <p className="rmv-cont">
                  <button
                    className="remove-btn  p-sm-1 p-md-2 p-lg-2 p-lg-2 p-xl-2 p-xxl-2   m-sm-0 m-md-3 m-lg-3 m-lg-3 m-xl-3 m-xxl-3"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="total-cart">
          <div className="flex-sm-row flex-md-row flex-lg-row flex-row d-flex justify-content-between mx-0 mx-sm-0 mx-md-2 mx-lg-2 mx-xl-2 mx-xxl-2 mb-0 mb-sm-2 mb-md-2 mb-lg-2 mb-xl-2 mb-xxl-2 ">
            <p>Subtotal:</p> <p>{calculateTotal()}€</p>
          </div>
          <div className="flex-sm-row flex-md-row flex-lg-row flex-row d-flex justify-content-between mx-0 mx-sm-0 mx-md-2 mx-lg-2 mx-xl-2 mx-xxl-2 mb-0 mb-sm-2 mb-md-2 mb-lg-2 mb-xl-2 mb-xxl-2">
            {total > 40 ? (
              <>
                <p>Free Shipping:</p> <p>0€</p>
              </>
            ) : (
              <>
                <p>Shipping Cost:</p> <p>{shipping}€</p>
              </>
            )}
          </div>
          <div className="total flex-sm-row flex-md-row flex-lg-row flex-row d-flex justify-content-between mx-0 mx-sm-2 mx-md-2 mx-lg-2 mx-xl-2 mx-xxl-2 mb-0 mb-sm-2 mb-md-2 mb-lg-2 mb-xl-2 mb-xxl-2">
            <p>Total:</p> <p>{parseFloat(finalTotal).toFixed(2)}€</p>
          </div>
        </div>
        <div className="free-shipping">
          *Free shipping on all orders over €39.99
        </div>
        <button onClick={nextStep} className="checkout-btn ">
          Checkout
        </button>
      </div>
      {/* <div className="cart-container d-flex flex-column">
        <div className="processing-line d-flex justify-content-between">
          {Object.values(Steps).map((stepValue, index) => (
            <p
              key={index}
              className={`circle ${step === stepValue ? "circle-active" : ""}`}
            >
              {index + 1}
            </p>
          ))}
        </div>
        {renderStep()}
      </div> */}
      {/* <div className="cart-container d-flex flex-column">
        <Stepper step={step} />
        <div>{renderStep()}</div>
      </div> */}
    </>
  );
}

export default CartProcess;
