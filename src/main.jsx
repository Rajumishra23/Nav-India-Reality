import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';       // 👈 Make sure App.jsx is correctly imported
import './index.css';          // ✅ Global CSS import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />                  
  </React.StrictMode>
);