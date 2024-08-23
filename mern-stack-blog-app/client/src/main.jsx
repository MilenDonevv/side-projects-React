import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalState from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalState>
    <App />
  </GlobalState>,
)