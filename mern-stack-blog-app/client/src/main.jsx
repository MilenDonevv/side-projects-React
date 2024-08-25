import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalState from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalState>
    <App />
  </GlobalState>,
)
