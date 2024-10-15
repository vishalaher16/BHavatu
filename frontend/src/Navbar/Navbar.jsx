import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <nav class="navbar">
    <div class="logo-container">
        {/* <img src="./../" alt="Logo" class="logo"/> */}    
        <span class="brand-text">BHAVATU</span>
    </div>
    <div class="tabs-container">
        <Link class="tab" to="/">Home</Link>
        <Link class="tab" to="/vastu">Vastu</Link>
        
        <Link class="tab" to="/prod">Products</Link>
        {/* <Link class="tab" to="/Cart">Cart</Link> */}
        <Link class="tab" to="/kundli">Kundli</Link>
        <Link class="tab" to="/DailyFeed">DailyFeed</Link>
        <Link class="tab" to="/Login">Login</Link>
       
    </div>
    </nav>
  );
};

export default Navbar;
