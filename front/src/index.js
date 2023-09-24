import React from 'react';
import ReactDOM from 'react-dom/client';
import 'style/Index.css';
import App from 'views/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);