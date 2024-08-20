import React, { useState } from 'react';
import './dailyfeed.css';

const DailyFeed = () => {
  const [dailyBhavishya, setDailyBhavishya] = useState('');
  const [textPost, setTextPost] = useState('');

  const handleBhavishyaChange = (e) => {
    setDailyBhavishya(e.target.value);
  };

  const handleTextPostChange = (e) => {
    setTextPost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the logic to save the daily feed
    console.log('Daily Bhavishya:', dailyBhavishya);
    console.log('Text Post:', textPost);
    // After saving, clear the inputs
    setDailyBhavishya('');
    setTextPost('');
  };

  return (
    <div className="daily-feed-container">
      <h2>Daily Feed</h2>
      <form onSubmit={handleSubmit} className="daily-feed-form">
        <div className="form-group">
          <label htmlFor="bhavishya">Daily Bhavishya:</label>
          <textarea
            id="bhavishya"
            value={dailyBhavishya}
            onChange={handleBhavishyaChange}
            placeholder="Enter today's Bhavishya..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="text-post">Text Post:</label>
          <textarea
            id="text-post"
            value={textPost}
            onChange={handleTextPostChange}
            placeholder="Enter additional text post..."
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Feed
        </button>
      </form>
      <div className="feed-display">
        <h3>Today's Bhavishya:</h3>
        <p>{dailyBhavishya}</p>
        <h3>Text Post:</h3>
        <p>{textPost}</p>
      </div>
    </div>
  );
};

export default DailyFeed;
