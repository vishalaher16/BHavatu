import React from 'react';
import './CartPage.css';

const CartPage = ({ cart }) => {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageURL} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-description">{item.description}</p>
                <p className="cart-item-price">₹{item.price}</p>
              </div>
            </div>
          ))}
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
