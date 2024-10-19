// ContactUs.jsx
import React from "react";
import "./contactus.css";
// You can import logos here, or use URLs if hosted
import bhavatuLogo from "../assets/bhavatuassets/78bffa54640842f2a62415a3bc45c549-free.png"; // Adjust the path accordingly

export default function ContactUs() {
  return (
    <div className="contact-container">
      <img src={bhavatuLogo} alt="Bhavatu Logo" className="logo" />
      <h1 className="contact-title">Get in Touch with Us</h1>
      <p className="contact-description">
        We at Bhavatu are dedicated to providing you with the best support and assistance. 
        Please feel free to reach out to us for inquiries, feedback, or any assistance you may need.
      </p>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:support@bhavatu.com">support@bhavatu.com</a></p>
        <p>Phone: <a href="tel:+9867961021">+91 9867961021</a></p>
        <p>Address: mumbai</p>
      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <p>
          <a href="https://www.facebook.com/Bhavatu" target="_blank" rel="noopener noreferrer">Facebook</a>
          <span> | </span>
          <a href="https://twitter.com/Bhavatu" target="_blank" rel="noopener noreferrer">Twitter</a>
          <span> | </span>
          <a href="https://www.instagram.com/Bhavatu" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </div>
    </div>
  );
}
