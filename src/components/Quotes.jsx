import React from 'react';
import { useState, useEffect } from 'react';
import './Q.css';
import { useNavigate } from 'react-router-dom';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [quoteHistory, setQuoteHistory] = useState([]);
  const navigate = useNavigate();

  const getQuote = async () => {
    try {
      const response = await fetch('https://quotes-api-self.vercel.app/quote');
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
      
      const newQuote = {
        quote: data.quote,
        author: data.author,
        timestamp: new Date().toLocaleString()
      };

      const currentHistory = JSON.parse(localStorage.getItem('quoteHistory') || '[]');
      const updatedHistory = [...currentHistory, newQuote];
      setQuoteHistory(updatedHistory);
      localStorage.setItem('quoteHistory', JSON.stringify(updatedHistory));
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    const savedHistory = localStorage.getItem('quoteHistory');
    if (savedHistory) {
      setQuoteHistory(JSON.parse(savedHistory));
    }
    getQuote();
  }, []);

  return (
    <div className="main-container">
      <div className="history">
        <button onClick={() => navigate('/history')} className="card-button">
          History
        </button>
      </div>
      <div className="card">
        {quote && (
          <>
            <p style={{ fontSize: '20px' }}>"{quote}"</p>
            <p style={{ fontStyle: 'italic' }}>- {author}</p>
          </>
        )}
        <div className="buttonC">
          <button onClick={getQuote} className="card-button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quotes;