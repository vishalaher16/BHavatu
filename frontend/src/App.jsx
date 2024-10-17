  import React, { useState } from "react";
  import { Route, Routes } from "react-router-dom";
  import "./App.css";
  import Navbar from "./Navbar/Navbar";
  import Home from "./Home/Home";
  import Vastu from "./Vastu/VastuPage";
  import Kundli from "../src/kundli/kundli"; // Fixed casing
  import DailyFeed from "./DailyFeed/dailyfeed"; // Fixed casing
  import Login from "./Login/login"; // Fixed casing
  import Singleproduct from "./SingleProducts/singleproduct";
  // import Checkout from "./Products/Checkout";
  import Assistant from "./REyna/reyna"; // Fixed casing
  import Cart from "./cart/Cart"; // Fixed casing
  import ChatbotButton from "./REyna/reyna"; // Fixed import to match component name
  import Footer from "./Footer"; // Fixed casing
  import Prod from "./prod/prod"
  import RelatedProducts from "./RelatedProducts/RelatedProducts";
  import Search from "./search/search";
  import Category from "./Category/category";
  import IndiviCategory from "./individualcategory/indivicategory";

  function App() {
    const [cart, setCart] = useState([]);

    return (
      
      <div className="App">
        <ChatbotButton />
        <Navbar />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vastu" element={<Vastu />} />
          <Route path="/kundli" element={<Kundli />} />
          {/* <Route path="/" element={<CategoriesPage />} />
          <Route path="/category/:id" element={<IndiviCategory />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/dailyfeed" element={<DailyFeed />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/category/:id" element={<IndiviCategory />} />
          <Route path="/prod" element={<Prod />} />
          <Route path="/product/:id" element={< Singleproduct/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/chatbot" element={<ChatbotButton />} />
          <Route path="/RelatedProducts" element={<RelatedProducts />} />
          <Route path="/Search" element={<Search />} />


          
        </Routes>
        <Footer />
      </div>
    
  );
  }

  export default App;
