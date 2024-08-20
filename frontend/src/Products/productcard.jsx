import React from 'react';
import './productcard.css';

const ProductCard = ({ product, onAddToCart }) => {
  // Handles adding product to the cart
  const handleAddToCart = () => {
    onAddToCart(product); // Call the passed function with the product
  };

  return (
    <div className="product-card">
      <img src={product.imageURL} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">₹{product.price}</p>
        <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
