import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./banner.css";
import bannerimg from "../assets/chakras-mystical-concept.png";

const Banner = () => {
  return (
    <div className='hero-banner'>
      <div className='content'>
        <div className='text-content'>
          <h1>BHAVATU STORE</h1>
          <p>
            Welcome to Bhavatu Store! Get the best deals on Bhavatu products for your astrological needs.
          </p>
          <div className="ctas">
            {/* Update the Read More button to use Link */}
            <Link to="/readmore" className='banner-cta'>Read More</Link>
            <Link to="/cart" className='banner-cta'>Cart</Link>
            
          </div>
        </div>
      </div>
      <img src={bannerimg} alt="banner" className="banner-image"/>
    </div>  
  );
}

export default Banner;
