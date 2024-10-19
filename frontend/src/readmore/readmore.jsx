import React from 'react';
import './readmore.css'; // Importing the CSS file for styling

const ReadMore = () => {
    return (
        <div className="read-more-page">
            <header className="read-more-header">
                <h1>Welcome to Bhavatu</h1>
                <p>Your one-stop destination for unique and quality products.</p>
            </header>

            <section className="about-section">
                <h2>About Bhavatu</h2>
                <p>
                    At Bhavatu, we believe in providing our customers with a wide range of 
                    high-quality products that enrich their lives. Founded in [Year], we have 
                    grown from a small startup to a thriving e-commerce platform serving customers 
                    worldwide.
                </p>
                <p>
                    Our mission is to offer exceptional products while ensuring a seamless 
                    shopping experience. We curate our collections with care, ensuring that every 
                    item meets our high standards of quality and sustainability.
                </p>
            </section>

            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to empower individuals through our products, 
                    fostering a sense of connection and community. We aim to be a trusted 
                    source for quality items that enhance your lifestyle while promoting 
                    sustainability and ethical practices.
                </p>
            </section>

            <section className="values-section">
                <h2>Our Values</h2>
                <ul>
                    <li>Quality: We strive for the highest standards in everything we offer.</li>
                    <li>Customer Satisfaction: Your happiness is our top priority.</li>
                    <li>Sustainability: We are committed to eco-friendly practices.</li>
                    <li>Innovation: We embrace change and seek out new ways to serve you better.</li>
                </ul>
            </section>

            <section className="contact-section">
                <h2>Get in Touch</h2>
                <p>
                    We love hearing from our customers! If you have any questions, feedback, 
                    or inquiries, feel free to reach out to us at <a href="mailto:support@ahervishal14.com">support@ahervishal14.com</a>.
                </p>
            </section>

            <footer className="read-more-footer">
                <p>© {new Date().getFullYear()} Bhavatu. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ReadMore;
