import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Main App component
import './index.css'; // Global styles (optional)

// Create the root DOM node and render the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
