import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./cart.scss";
// import CartDelivery from "./CartDelivery";
import { Steps } from "./constants";
import Stepper from "./Stepper";
import CartPayment from "./CartPayment";
import CartConfirm from "./CartConfirm.jsx";
import CartPlacedOrder from "./CartPlacedOrder.jsx";
import CartDelivery from "./CartDelivery";
import CartProcess from "./CartProcess";

const Cart = () => {
  const [step, setStep] = useState(Steps.first); // Start with Cart (step 1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postcode: "",
    city: "",
  });
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [isRemoved, setIsRemoved] = useState(false);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, [isRemoved]);
  const updateCartInLocalStorage = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
    setCartItems(items);
  };

  const incrementQuantity = (id) => {
    const newCart = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartInLocalStorage(newCart);
  };

  const decrementQuantity = (id) => {
    const newCart = cartItems.map((item) =>
      item._id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    updateCartInLocalStorage(newCart);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  };

  const total = parseFloat(calculateTotal()).toFixed(2);
  const shippingCost = calculateTotal() > 39.99 ? 0 : 15;
  const shipping = total > 40 ? 0 : shippingCost;
  const finalTotal = parseFloat(total) + parseFloat(shipping);
  const goTo = (step) => {
    setStep(step);
  };

  // const handleCheckout = () => {
  //   setShowCheckout(true);
  //   goTo(Steps.second); // Hide cart items and show the checkout form
  // };

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
  // const shippingCost = calculateTotal() > 39.99 ? 0 : 15;
  // const shippingMessage =
  //   calculateTotal() > 40
  //     ? "Free Shipping: 0"
  //     : `Shipping Cost: $${shippingCost}`;
  // if (cartItems.length === 0) {
  //   return (
  //     <div>
  //       Your cart is empty. <Link to="/products">Go to Products</Link>
  //     </div>
  //   );
  // }
  // console.log({ step, cartItems });

  // const removeFromCart = (productId) => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //   const newCart = cart.filter((item) => item._id !== productId);

  //   localStorage.setItem("cart", JSON.stringify(newCart));
  // };

  const renderStep = () => {
    switch (step) {
      case Steps.first:
        return (
          <CartProcess
            cartItems={cartItems}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            calculateTotal={calculateTotal}
            finalTotal={finalTotal}
            step={step}
            goTo={goTo}
            isRemoved={isRemoved}
            setIsRemoved={setIsRemoved}
          />
        );
      case Steps.second:
        return (
          <CartDelivery
            // onNext={(details) => goTo(Steps.third, { delivery: details })}
            goTo={goTo}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case Steps.third:
        return (
          <CartPayment
            goTo={goTo}
            formData={formData}
            setFormData={setFormData}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            // onNext={(details) => goTo(Steps.fourth, { payment: details })}
          />
        );
      case Steps.fourth:
        return (
          <CartConfirm
            cartItems={cartItems}
            finalTotal={finalTotal}
            goTo={goTo}
            formData={formData}
            setFormData={setFormData}
            paymentMethod={paymentMethod}
            // details={orderDetails}
            // onConfirm={() =>   }
            // onBack={() => goTo(Steps.third)}
          />
        );
      case Steps.fifth:
        return (
          <CartPlacedOrder
            formData={formData}
            setFormData={setFormData}
            onNext={goTo}
          />
        );

      default:
        return <div>Unknown step</div>;
    }
  };
  return (
    <div className="cart-container d-flex flex-column">
      <Stepper step={step} />
      {/* <div
        className="processing-line d-flex justify-content-between
      "
      >
        <p className="circle circle-active">1</p>
        <p className="circle ">2</p>
        <p className="circle ">3</p>
        <p className="circle">4</p>
        <p className="circle ">5</p>
      </div> */}
      {/* {!showCheckout ? ( */}
      <>
        {renderStep()}
        {/* <div className="card">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item d-flex flex-row">
              <p className="m-3 img-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
              </p>

              <div>
                <h4 className="m-3">{item.name}</h4>
                <p className="m-3">Price: ${item.price}</p>
                <div className="quantity-controls d-flex justify-content-between">
                  <p>
                    <button
                      className="p-2 m-3"
                      onClick={() => decrementQuantity(item._id)}
                    >
                      -
                    </button>
                    <span> {item.quantity} </span>
                    <button
                      className="p-2 m-3"
                      onClick={() => incrementQuantity(item._id)}
                    >
                      +
                    </button>
                  </p>

                  <p className="rmv-cont">
                    <button
                      className="p-2 m-3 remove-btn"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div>Subtotal: ${calculateTotal()}</div>
          <div>{shippingMessage}</div>
          <div className="total">Total: {calculateTotal()}</div>
          <button onClick={handleCheckout} className="checkout-btn ">
            Checkout
          </button>
        </div> */}
      </>
      {/* ) : (
        <CartDelivery /> // Show CartDelivery component when checkout is initiated
      )} */}
    </div>
  );
};

export default Cart;

// /* eslint-disable no-unused-vars */
// import "./cart.css";
// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../../contexts/CartContext";

// const Cart = () => {
//   const { productState, removeProduct } = useContext(CartContext);

//   return productState.length < 1 ? (
//     <div className="empty-cart">
//       <h1>Your shopping cart is empty</h1>
//       <p>No items found</p>
//       <Link className="empty-cart-link" to="/products">
//         Go to Products Page
//       </Link>
//     </div>
//   ) : (
//     <>
//       <section className="cart">
//         <h1 className="cart-title">Shopping Cart</h1>
//         <div className="cart-wrapper">
//           <div className="cart-items">
//             {productState.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <div className="cart-item-img-wrapper">
//                   <img
//                     className="cart-item-img"
//                     src={item.image}
//                     alt={item.title}
//                   />
//                 </div>
//                 <div className="cart-item-info">
//                   <div className="cart-item-title">{item.title}</div>
//                   <div className="cart-item-quantity">
//                     Quantity:
//                     <span>{item.amount}</span>
//                   </div>
//                   <div className="cart-item-price">
//                     Price:
//                     <span>{(item.price * item.amount).toFixed(2)}$ </span>
//                   </div>
//                   <i
//                     onClick={() => removeProduct(item.id)}
//                     className="bi bi-trash fill cart-item-delete-icon"
//                   ></i>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="cart-summary">
//             <div className="cart-summary-text">
//               <i className="bi bi-check-circle-fill"></i>
//               Some of your order qualifies for free shipping. Select this option
//               at checkout.
//             </div>
//             <div className="cart-summary-total">
//               Total:
//               <span>
//                 {productState
//                   .reduce((acc, cur) => acc + cur.price * cur.amount, 0)
//                   .toFixed(2)}
//                 $
//               </span>
//             </div>
//             <button className="cart-summary-btn">Proceed to Checkout</button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Cart;
