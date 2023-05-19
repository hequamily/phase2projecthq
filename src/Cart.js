import React from "react";

function Cart({ cartItems, removeFromCart }) {
  return (
    <div>
      <h1>My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "200px", height: "200px" }}
              />
              <p>{item.name}</p>
              <p>{item.artist}</p>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

