import React, { useState } from "react";
import { Steps } from "./constants.js";
import "./cartPayment.scss";

function CartPayment({ goTo, paymentMethod, setPaymentMethod }) {
  // const [paymentMethod, setPaymentMethod] = useState("creditCard"); // Default to credit card

  const onPaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const onPaymentSubmission = (event) => {
    event.preventDefault();
    // Here you might handle payment processing or similar
    // onPaymentComplete(); // Callback to indicate payment is complete
    goTo(Steps.fourth);
  };
  const goBack = () => {
    goTo(Steps.second);
  };

  return (
    <div className="card ">
      <div className="m-auto w-75">
        <h2 className="text-center my-2">Choose Payment Method</h2>
        <div
          className="d-flex justify-content-around m-auto w-100 w-sm-50 w-md-50 w-lg-50 w-xl-50 w-xxl-50"
          onChange={onPaymentMethodChange}
        >
          <input
            type="radio"
            value="CreditCard"
            name="paymentMethod"
            defaultChecked
          />{" "}
          Credit/Debit Card
          <input type="radio" value="PayPal" name="paymentMethod" /> PayPal
        </div>

        {paymentMethod === "CreditCard" ? (
          <div>
            <img
              className="visa"
              src="https://financialit.net/sites/default/files/visa-mastercard-amex_0.png"
              alt=""
            />
            <form className="credit-form" onSubmit={onPaymentSubmission}>
              <p>Card Holder*</p>
              <input type="text" name="cardHolder" required />
              <p>Card Number*</p>
              <input
                type="text"
                name="cardNumber"
                placeholder="Enter card number"
                required
              />
              <p>Expiry Date*</p>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                required
              />
              <p>Security Code*</p>
              <input type="text" name="cvv" placeholder="CVV" required />
              {/* <button type="submit">Pay</button> */}
            </form>
            <p>*mandatory field</p>
          </div>
        ) : (
          <div>
            <img
              className="paypal my-4 "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
              alt=""
            />
            <form className="paypal-form m-auto" action="">
              <p className="my-3">Log In To PayPal</p>
              <input
                className="paypal-input"
                type="text"
                name=""
                id=""
                placeholder="Email address"
                required
              />
              <input
                className="paypal-input"
                type="password"
                name=""
                id=""
                placeholder="Password"
                required
              />
              <button className="paypal-btn">Log In</button>
            </form>
            {/* <button onClick={onPaymentSubmission}>Pay with PayPal</button> */}
          </div>
        )}
      </div>
      {/* <button onClick={onBack}>Back to Delivery</button> */}
      <div className="d-flex">
        <button className="btn-action back-btn" onClick={goBack}>
          Back
        </button>
        <button
          className="btn-action next-btn"
          type="submit"
          onClick={onPaymentSubmission}
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
}

export default CartPayment;
