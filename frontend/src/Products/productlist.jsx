import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../src/firebase';
import ProductCard from './productcard';
import './productlist.css';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ setCart }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsArray);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const handleCheckout = () => {
    navigate('/Cart');
  };

  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <button onClick={handleCheckout} className="checkout-button">Go to Cart</button>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
