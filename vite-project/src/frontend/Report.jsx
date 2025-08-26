import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import '../style/reportstyle.css';
import { reportIssue } from './../services/api';

function ReportIssuePage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  if (!user || !token) {
    return <Navigate to="/signup" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await reportIssue(
        { 
          issue,
          description,
          userEmail: user.email,
        }, token
      );
      setMessage(response.data.message || 'Issue reported successfully!');
      setIssue('');
      setDescription('');
    } catch (error) {
      setMessage('Error reporting issue. Please try again.');
      console.error(error);
    }
  };

  return (
    <>
      <div className="report-issue-page">
        <section className="report-issue-card">
          <h2>Report an Issue</h2>
          <p>Facing any problem with our platform? Let us know below.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="issue">Issue Title</label>
            <input
              type="text"
              id="issue"
              placeholder="Enter issue title"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              required
            />

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Describe the issue in detail"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            {message && <p className="alert-message">{message}</p>}

            <button type="submit" className="btn-submit">
              Submit Issue
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default ReportIssuePage;
