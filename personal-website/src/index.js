import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

if (
  window.location.pathname === '/my-portfolio-backendli/' &&
  !window.localStorage.getItem('site_refreshed_once')
) {
  window.localStorage.setItem('site_refreshed_once', 'true');
  window.location.reload();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


serviceWorkerRegistration.unregister();

reportWebVitals();
