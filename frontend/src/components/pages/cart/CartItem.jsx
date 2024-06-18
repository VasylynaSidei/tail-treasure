import React, { useEffect, useState } from "react";

export const CartItem = ({ item }) => {
  <>
    <div key={item.id} className="cart-item">
      <img src={item.image} alt={item.name} className="product-image" />
      <div>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <div className="quantity-controls">
          <button onClick={() => decrementQuantity(item._id)}>-</button>
          <span> Quantity: {item.quantity} </span>
          <button onClick={() => incrementQuantity(item._id)}>+</button>
        </div>
      </div>
    </div>
  </>;
};
