import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="promo-section">
        <div className="overlay"></div>
        <div className="content">
          <h1>
            Bhavatu leverages advanced AI algorithms
            <span className="highlight">
              to provide you with comprehensive statistical analysis
            </span>
            Trial <br />  
            detailed reports about the Vastu of your home
          </h1>
          <p className="para">
            By assessing various parameters and aligning them with Vastu
            principles, our app helps you understand the current state of your
            living environment and offers actionable insights for improvement..
          </p>
          <div className="buttons">
            <Link to="/Vastu" className="btn">
              Get Started
            </Link>
            <Link to="/DailyFeed" className="play-btn">
              <div className="play-icon">▶</div>
            </Link>
          </div>
        </div>
      </section>
      <div className="wrapper">
        <div className="grid-cards">
          <div className="card-container">
            <div className="gradient-wrapper green-gradient">
              <img src="https://www.thepackersmovers.com/blog/wp-content/uploads/2021/09/vastu-tips-2.jpg" alt="Card Image" />
              <h3 className="text-title">VASTU ANALYSIS</h3>
              <p className="text-description">
                AN AI BASED VASTU ANALYSIS POWERD CHATBOT
              </p>
              <Link to="/vastu" className="read-more-btn">Read More</Link>
            </div>
          </div>

          <div className="card-container">
            <div className="gradient-wrapper white-gradient">
              <img src="https://tse1.mm.bing.net/th?id=OIP.yOkG7MUucwpHPnTSVMnHVgHaCo&pid=Api&P=0&h=180" alt="Card Image" />
              <h3 className="text-title">DAILYFeed</h3>
              <p className="text-description">
                Daily horoscope and quotes to your zodiac sign in just a click
              </p>
              <Link to="/dailyfeed" className="read-more-btn">Read More</Link>
            </div>
          </div>

          <div className="card-container">
            <div className="gradient-wrapper yellow-gradient">
              <img src="https://www.wholesalersnetwork.com/wp-content/uploads/2021/12/astrologywholesalers.jpg" alt="Card Image" />
              <h3 className="text-title">Our Products</h3>
              <p className="text-description">
                Our Astrology products and jewel that promises wealth and health along with mindful peace and harmony
              </p>
              <Link to="/products" className="read-more-btn">Read More</Link>
            </div>
          </div>

        
        </div>
      </div>
    </>
  );
}
