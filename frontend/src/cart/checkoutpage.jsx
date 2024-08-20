import React from 'react';

const CheckoutPage = () => {
  const handlePayment = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay key
      amount: 1000, // Amount in paise (e.g., 1000 paise = ₹10)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      handler: function (response) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '9999999999'
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <button onClick={handlePayment} className="pay-button">Pay Now</button>
    </div>
  );
};

export default CheckoutPage;
