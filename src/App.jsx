import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TryGlass } from './TryGlass/TryGlass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <TryGlass/>
    </div>
  )
}

export default App
