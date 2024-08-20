import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vastu">Vastu</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>  
            <Link to="/Cart">cart</Link>
          </li>
          <li>
            <Link to="/kundli">Kundli</Link>
          </li>
          <li>
            <Link to="/DailyFeed">DailyFeed</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Assistant">Assistant</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
