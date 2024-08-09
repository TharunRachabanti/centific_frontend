import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [review, setReview] = useState('');
  const [sentiment, setSentiment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/analyze', { review });
      setSentiment(response.data.sentiment);
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Sentiment Analysis</h1>
        <form onSubmit={handleSubmit} className="form">
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="5"
            cols="40"
            placeholder="Enter your review here..."
            className="textarea"
          ></textarea>
          <button type="submit" className="submit-btn">Analyze Sentiment</button>
        </form>
        {sentiment && <h2 className="result">Sentiment: {sentiment}</h2>}
      </div>
    </div>
  );
}

export default App;
