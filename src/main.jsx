import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/reset.css';
import './assets/css/fonts.css';
import './assets/css/grid.min.css';
import './assets/css/theme.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
