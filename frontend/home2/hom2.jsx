import React from 'react';
import './home2.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">YourLogo</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="hero-section">
        <h1 className="hero-title">Welcome to Your Classy Home Page</h1>
        <p className="hero-subtitle">Elegance meets functionality</p>
        <button className="cta-button">Get Started</button>
      </header>
    </div>
  );
};

export default HomePage;
