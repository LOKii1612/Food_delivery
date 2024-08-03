import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ThankYouPage from './components/Cart/Thanku';
import './index.css'; // Your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/thank" element={<ThankYouPage />} />
    </Routes>
  </Router>
);
