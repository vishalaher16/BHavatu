import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav>
    //   <div className="navbar-container">
    //     <ul className="nav-links">
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/vastu">Vastu</Link>
    //       </li>
    //       <li>
    //         <Link to="/Products">Products</Link>
    //       </li>
    //       <li>  
    //         <Link to="/Cart">cart</Link>
    //       </li>
    //       <li>
    //         <Link to="/kundli">Kundli</Link>
    //       </li>
    //       <li>
    //         <Link to="/DailyFeed">DailyFeed</Link>
    //       </li>
    //       <li>
    //         <Link to="/Login">Login</Link>
    //       </li>
         
         
          
    //     </ul>
    //   </div>
    // </nav>
    <nav class="navbar">
    <div class="logo-container">
        <img src="" alt="Logo" class="logo"/>
        <span class="brand-text">Your Brand</span>
    </div>
    <div class="tabs-container">
        <Link class="tab" to="/">Home</Link>
        <Link class="tab" to="/vastu">Vastu</Link>
        <Link class="tab" to="/Products">Products</Link>
        <Link class="tab" to="/Cart">cart</Link>
        <Link class="tab" to="/kundli">Kundli</Link>
        <Link class="tab" to="/DailyFeed">DailyFeed</Link>
        <Link class="tab" to="/Login">Login</Link>
       
    </div>
    </nav>
  );
};

export default Navbar;
