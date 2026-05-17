import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './overseer_drift.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
