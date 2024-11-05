import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Add this import
import Quotes from './components/quotes';
import History from './components/history';

function App() {
  return (
    <BrowserRouter>  
      <Routes>  
        <Route path="/" element={<Quotes />} />  
        <Route path="/history" element={<History />} />  
      </Routes>  
    </BrowserRouter>  
  );
}

export default App;