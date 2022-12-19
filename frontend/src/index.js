import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AdminContextProvider } from './admin/components/adminContext';
import { BrowserRouter as Router } from 'react-router-dom';
//import './admin/interceptor/axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <AdminContextProvider>
      <App />
    </AdminContextProvider>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
