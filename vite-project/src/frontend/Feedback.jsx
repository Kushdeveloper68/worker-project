import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import '../style/feedbackstyle.css';
import { submitFeedback } from './../services/api';

function FeedbackPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState('');

  if (!user || !token) {
    return <Navigate to="/signup" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await submitFeedback({ feedback, rating, userEmail: user.email }, token);
      setMessage(response.data.message || 'Thank you for your feedback!');
      setFeedback('');
      setRating('');
    } catch (error) {
      setMessage('Error sending feedback. Please try again.');
      console.error(error);
    }
  };

  return (
    <>
     
      <div className="feedback-page">
        <section className="feedback-card">
          <h2>Submit Feedback</h2>
          <p>Your feedback helps us improve our platform.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value="">Select rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Good</option>
              <option value="3">⭐⭐⭐ Average</option>
              <option value="2">⭐⭐ Poor</option>
              <option value="1">⭐ Very Poor</option>
            </select>

            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              placeholder="Write your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />

            {message && <p className="alert-message">{message}</p>}

            <button type="submit" className="btn-submit">
              Submit Feedback
            </button>
          </form>
        </section>
      </div>
     
    </>
  );
}

export default FeedbackPage;
