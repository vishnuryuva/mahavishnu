import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Template + icon stylesheets (same order as the original page)
import './assets/css/style.min.css'
import './assets/css/fontawesome-all.css'
import './assets/css/simple-line-icons.css'
import './assets/css/weather-icons.min.css'
import './assets/css/themify-icons.css'
import './assets/css/flag-icon.min.css'
import './assets/css/materialdesignicons.min.css'
import './assets/css/cryptocoins.css'
// Page-specific overrides (the inline <style> from the original page)
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
