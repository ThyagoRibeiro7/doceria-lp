import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./css/reset.css";
import "./css/mediaqueries.css";

// swiper library imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
