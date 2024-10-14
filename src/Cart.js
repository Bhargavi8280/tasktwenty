import React from "react";

const Cart = ({ cartItems, removeFromCart, addToCart }) => {
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <p>
                Price: ${item.price} x {item.quantity}
              </p>
              <button onClick={() => removeFromCart(item)}>Remove One</button>
              <button onClick={() => addToCart(item)}>Add One</button>
            </div>
          ))}
          <h3 className="cart-total">Total: ${totalCost}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
