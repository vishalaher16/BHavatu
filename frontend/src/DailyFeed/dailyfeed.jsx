// src/components/dailyfeed.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './dailyfeed.css'; // Import your CSS file

const DailyFeed = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const feedCollection = collection(db, 'dailyfeed');
        const feedSnapshot = await getDocs(feedCollection);
        const feedList = feedSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFeeds(feedList);
      } catch (error) {
        console.error("Error fetching daily feed data: ", error);
      }
    };

    fetchFeeds();
  }, []);

  return (
    <div className="cccontainer">
      {feeds.map(feed => (
        <div key={feed.id} className="cccard">
          <div className="cccard-image">
            <img src={feed.imageURL} alt={feed.title} />
          </div>
          <div className="cccard-content">
            <h1 className="cccard-number">{feed.name}</h1>
            <h2 className="cccard-title">{feed.title}</h2>
            <p className="cccard-description">{feed.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyFeed;
