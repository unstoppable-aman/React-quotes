import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Q.css';

function History() {
  const navigate = useNavigate();
  const quoteHistory = JSON.parse(localStorage.getItem('quoteHistory') || '[]');

  return (
    <div className="main-container">
      <div className="history-header">
        <h1>Quote History</h1>
        <button onClick={() => navigate('/')} className="card-button">
          Back to Quotes
        </button>
      </div>
      <div className="history-container">
        {quoteHistory.length === 0 ? (
          <div className="card">
            <p>No quotes in history yet!</p>
          </div>
        ) : (
          quoteHistory.map((item, index) => (
            <div key={index} className="card history-card">
              <p style={{ fontSize: '18px' }}>"{item.quote}"</p>
              <p style={{ fontStyle: 'italic', marginTop: '10px' }}>- {item.author}</p>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
                {item.timestamp}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default History;