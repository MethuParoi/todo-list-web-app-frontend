import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='bg-cyan-500'>hi, there</h1>
    </div>
  )
}

export default App;