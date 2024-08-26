import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalState from './context/context.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalState>
      <App />
    </GlobalState>
  </BrowserRouter>

)
