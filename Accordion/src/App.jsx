import { useState } from 'react'
import './App.css'
import Accordion from './components/accordion';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <Accordion/>
      </div>
  );
}

export default App
