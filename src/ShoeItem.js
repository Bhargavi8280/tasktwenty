import React from "react";

const ShoeItem = ({ shoe, addToCart }) => {
  return (
    <div className="shoe-item">
      <img src={shoe.image} alt={shoe.name} />
      <div>
        <h3>{shoe.name}</h3>
        <p>Price: ${shoe.price}</p>
      </div>
      <button onClick={() => addToCart(shoe)}>Add to Cart</button>
    </div>
  );
};

export default ShoeItem;
