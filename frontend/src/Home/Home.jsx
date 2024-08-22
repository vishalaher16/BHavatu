import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
       {/* <section class="promo-section">
        <div class="content-container">
            <h1>Get Your Free <span>2 Weeks</span> Trial Right Here</h1>
            <p>Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in insensible favourable.</p>
            <div class="buttons">
                <Link to="/DailyFeed" class="btn btn-start">Get Started</Link>
                <Link to="/DailyFeed" class="btn btn-play"><span class="play-icon">▶</span></Link>
            </div>
        </div>
    </section> */}
      <section class="promo-section">
        <div class="overlay"></div>
        <div class="content">
            <h1> Bhavatu leverages advanced AI algorithms  <span class="highlight">to provide you with
            comprehensive statistical analysis</span> Trial <br/>detailed reports about
            the Vastu of your home</h1>
            <p class='para'>By assessing various parameters and
                  aligning them with Vastu principles, our app helps you
                  understand the current state of your living environment and
                  offers actionable insights for improvement..</p>
            <div class="buttons">
                <Link to="/DailyFeed" class="btn">Get Started</Link>
                <Link to="/DailyFeed" class="play-btn">
                    <div class="play-icon">▶</div>
                </Link>
            </div>
        </div>
    </section>
    <div class="wrapper">
  {/* <h2 class="title-center">Your Title Here</h2> */}
  <div class="grid-cards">
    <div class="card-container">
      <div class="gradient-wrapper green-gradient">
        <img src="image1.jpg" alt="Card Image"/>
        <h3 class="text-title">Card Title 1</h3>
        <p class="text-description">This is a description for the first card.</p>
      </div>
    </div>

    <div class="card-container">
      <div class="gradient-wrapper white-gradient">
        <img src="image2.jpg" alt="Card Image"/>
        <h3 class="text-title">Card Title 2</h3>
        <p class="text-description">This is a description for the second card.</p>
      </div>
    </div>

    <div class="card-container">
      <div class="gradient-wrapper yellow-gradient">
        <img src="image3.jpg" alt="Card Image"/>
        <h3 class="text-title">Card Title 3</h3>
        <p class="text-description">This is a description for the third card.</p>
      </div>
    </div>

    <div class="card-container">
      <div class="gradient-wrapper blue-gradient">
        <img src="image4.jpg" alt="Card Image"/>
        <h3 class="text-title">Card Title 4</h3>
        <p class="text-description">This is a description for the fourth card.</p>
      </div>
    </div>
  </div>
</div>



      {/* <div class="container">
        <ul class="cards">
          <li class="card">
            <div>
              <h3 class="card-title">Statistical Analysis and Reports</h3>
              <div class="card-content">
                <p>
                  Bhavatu leverages advanced AI algorithms to provide you with
                  comprehensive statistical analysis and detailed reports about
                  the Vastu of your home. By assessing various parameters and
                  aligning them with Vastu principles, our app helps you
                  understand the current state of your living environment and
                  offers actionable insights for improvement..
                </p>
              </div>
            </div>
            <div class="card-link-wrapper">
              <a href="/vastu" class="card-link">
                Learn More
              </a>
            </div>
          </li>
          <li class="card">
            <div>
              <h3 class="card-title">Daily Vastu Feed Notifications</h3>
              <div class="card-content">
                <p>
                  Stay informed and aligned with the cosmic energies through our
                  daily Vastu feed notifications. Bhavatu delivers personalized
                  updates based on your astrological data, ensuring that you
                  receive timely advice and tips to enhance the Vastu of your
                  home each day. This feature helps you maintain a harmonious
                  and balanced living space continuously.
                </p>
              </div>
            </div>
            <div class="card-link-wrapper">
              <a href="/DailyFeed" class="card-link">
                Learn More
              </a>
            </div>
          </li>
          <li class="card">
            <div>
              <h3 class="card-title">Personal Rashi and Astrological Data</h3>
              <div class="card-content">
                <p>
                  Our app takes into account your specific Rashi (zodiac sign)
                  and other astrological data to provide highly personalized
                  Vastu recommendations. This ensures that the advice you
                  receive is tailored to your unique cosmic blueprint,
                  maximizing the benefits of Vastu principles in your daily
                  life.
                </p>
              </div>
            </div>
            <div class="card-link-wrapper">
              <a href="/kundli" class="card-link">
                Learn More
              </a>
            </div>
          </li>
          <li class="card">
            <div>
              <h3 class="card-title">AI Chatbot Assistance</h3>
              <div class="card-content">
                <p>
                  Interact with our intelligent AI chatbot for instant
                  assistance and guidance. Whether you have questions about
                  Vastu principles, need personalized advice, or require help
                  navigating the app, our chatbot is always ready to assist you.
                  This feature makes it easy to get the support you need,
                  whenever you need it.
                </p>
              </div>
            </div>
            <div class="card-link-wrapper">
              <a href="/assistant" class="card-link">
                Learn More
              </a>
            </div>
          </li>
          <li class="card">
            <div>
              <h3 class="card-title">Products Section for Manis and Mudras</h3>
              <div class="card-content">
                <p>
                  Discover our curated selection of Manis and Mudras in the
                  products section. These items are chosen to bring good luck,
                  prosperity, and positive energy into your home. Shop with ease
                  and confidence, knowing that each product is designed to
                  enhance the Vastu of your living space.
                </p>
              </div>
            </div>
            <div class="card-link-wrapper">
              <a href="/ProoductsPage" class="card-link">
                Learn More
              </a>
            </div>
          </li>
          <li class="card">
            <div>
              <h3 class="card-title">Service 7</h3>
              <div class="card-content">
                <p>
                  Effortlessly save and manage your Kundlis (birth charts)
                  within the Bhavatu app. This feature allows you to store your
                  astrological data securely and access it whenever needed.
                  Having your Kundlis readily available ensures that you can
                  always refer to them for personalized Vastu recommendations
                  and astrological insights.
                </p>
              </div>
            </div>
            <div class="card-link-wrapper">
              <a href="" class="card-link">
                Learn More
              </a>
            </div>
          </li>
          <li class="card">
            <div>
              <h3 class="card-title">Service 8</h3>
              <div class="card-content">
                <p>
                  {" "}
                  Vivamus eget eros id elit feugiat mollis. Nam sed sem quis
                  libero finibus tempor.
                </p>
              </div>
            </div>
            <div class="card-link-wrapper">
              <a href="" class="card-link">
                Learn More
              </a>
            </div>
          </li>
        </ul>
      </div>
      <h1 class="text-center ff">Pick the best plan for you</h1>

      <div class="pricing-box-container">
        <div class="pricing-box pricing-box-bg-image text-center">
          <h5>Free</h5>
          <p class="price">
            <sup>$</sup>0<sub>/mo</sub>
          </p>
          <ul class="features-list">
            <li>
              <strong>1</strong> Project
            </li>
            <li>
              <strong>5</strong> Team Members
            </li>
            <li>
              <strong>50</strong> Personal Projects
            </li>
            <li>
              <strong>5,000</strong> Messages
            </li>
          </ul>
          <button class="btn-primary">Get Started</button>
        </div>

        <div class="pricing-box pricing-box-bg-image text-center">
          <h5>Premium</h5>
          <p class="price">
            <sup>$</sup>39<sub>/mo</sub>
          </p>
          <ul class="features-list">
            <li>
              <strong>5</strong> Project
            </li>
            <li>
              <strong>20</strong> Team Members
            </li>
            <li>
              <strong>100</strong> Personal Projects
            </li>
            <li>
              <strong>15,000</strong> Messages
            </li>
          </ul>
          <button class="btn-primary">Get Started</button>
        </div>

        <div class="pricing-box pricing-box-bg-image text-center">
          <h5>Platinum</h5>
          <p class="price">
            <sup>$</sup>89<sub>/mo</sub>
          </p>
          <ul class="features-list">
            <li>
              <strong>25</strong> Project
            </li>
            <li>
              <strong>50</strong> Team Members
            </li>
            <li>
              <strong>500</strong> Personal Projects
            </li>
            <li>
              <strong>50,000</strong> Messages
            </li>
          </ul>
          <button class="btn-primary">Get Started</button>
        </div>
      </div> */}
    </>
  );
}
