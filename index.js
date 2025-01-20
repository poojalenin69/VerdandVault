import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Importing BrowserRouter for routing
import App from './App';  // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root element for React
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
