import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import SingleScrollWebsite from './SingleScrollWeb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SingleScrollWebsite/>
    </>
  )
}

export default App
