import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Vastu from "./Vastu/VastuPage";
import Kundli from "./kundli/kundli";
import DailyFeed from "./DailyFeed/dailyfeed";
import Login from "./Login/login";
import Products from "./Products/productlist";
import Assistant from "./REyna/reyna";
import Cart from "./cart/CartPage";
import Payment from "./cart/checkoutpage";
import ChatbotButton from './REyna/reyna'; 
import Footer from './Footer';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className="App">
        <ChatbotButton/>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vastu" element={<Vastu />} />
          <Route path="/Kundli" element={<Kundli />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/DailyFeed" element={<DailyFeed />} />
          <Route path="/Assistant" element={<Assistant />} />
          <Route path="/Products" element={<Products setCart={setCart} />} />
          <Route path="/Cart" element={<Cart cart={cart} />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/chatbot" element={<ChatbotButton />} />
          
        </Routes>
        <Footer/>
       
      </div>
    </>
  );
}

export default App;
