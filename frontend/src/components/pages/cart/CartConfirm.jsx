import React, { useContext, useState } from "react";
import { Steps } from "./constants.js";
import { useUserContext } from "../../contexts/UserContext.jsx";
import { makePurchase } from "../../../Helpers/fetches.js";
import "./cartConfirm.scss";

function CartConfirm({ goTo, formData, cartItems, finalTotal, paymentMethod }) {
  const { state, dispatch } = useUserContext();
  const { user } = state;
  const [usePoints, setUsePoints] = useState(false);

  console.log("User from confirm:", user);

  const onConfirm = async () => {
    const discount = usePoints ? user.bonusPoints : 0;
    const totalAfterDiscount = finalTotal - discount;

    console.log("User before onConfirm:", user);

    if (!user || !user.id) {
      console.error("User ID is missing or invalid");
      return;
    }

    const orderDetails = {
      userId: user.id,
      productId: cartItems[0]._id,
      quantity: cartItems[0].quantity,
      total: totalAfterDiscount,
    };

    console.log("Order Details:", orderDetails);

    try {
      const result = await makePurchase(orderDetails);
      console.log("Order Details after purchase:", orderDetails);

      dispatch({ type: "UPDATE_HISTORY", payload: result.history });
      dispatch({ type: "UPDATE_BONUS_POINTS", payload: result.bonusPoints });

      if (usePoints) {
        dispatch({ type: "USE_POINTS", payload: discount });
      }

      localStorage.setItem(
        "userData",
        JSON.stringify({
          ...state,
          user: {
            ...state.user,
            bonusPoints: result.bonusPoints,
            history: result.history,
          },
        })
      );

      localStorage.setItem("cart", JSON.stringify([]));
      goTo(Steps.fifth);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const goBack = () => {
    goTo(Steps.third);
  };

  return (
    <div className="cart-confirm card">
      <h2 className="text-center title-confirm">Order Summary</h2>
      <div className="order-cont">
        <div>
          <h3 className="conf-title">Products</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item d-flex flex-row">
              <p className="m-3 img-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
              </p>
              <div className="w-100 w-sm-100 w-md-75 w-lg-75 w-xl-75 w-xxl-75">
                <h4 className="m-0 m-sm-3 m-md-3 m-lg-3 m-xl-3 m-xxl-3 conf-title-prod">
                  {item.name}
                </h4>
                <p className="my-1 m-sm-3 m-md-3 m-lg-3 m-xl-3 m-xxl-3 conf-price">
                  Price: {item.price}€
                </p>
                <p className="my-1 m-sm-3 m-md-3 m-lg-3 m-xl-3 m-xxl-3 conf-quantity">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>
          ))}
          <p className="text-end total">
            Total: {parseFloat(finalTotal).toFixed(2)}€
          </p>
          {user?.bonusPoints > 0 && (
            <div className="bonus-points">
              <input
                type="checkbox"
                checked={usePoints}
                onChange={() => setUsePoints(!usePoints)}
              />
              <label>Use {user.bonusPoints} bonus points</label>
            </div>
          )}
          {usePoints && (
            <p className="text-end discount">
              Discount: -{parseFloat(user.bonusPoints).toFixed(2)}€
            </p>
          )}
          {usePoints && (
            <p className="text-end total-after-discount">
              Total after discount:{" "}
              {parseFloat(finalTotal - user.bonusPoints).toFixed(2)}€
            </p>
          )}
        </div>
        <div>
          <h3 className="conf-title">Delivery Details:</h3>
          <p className="info-field">
            {formData.firstName} {formData.lastName}
          </p>
          <p className="info-field">{formData.address}</p>
          <p className="info-field">{formData.postcode}</p>
          <p className="info-field">{formData.city}</p>
        </div>
        <div>
          <h3 className="conf-title">Payment Method:</h3>
          <p className="info-field">{paymentMethod}</p>
        </div>
      </div>
      <div className="d-flex">
        <button className="btn-action back-btn" onClick={goBack}>
          Back
        </button>
        <button className="btn-action next-btn" onClick={onConfirm}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CartConfirm;
