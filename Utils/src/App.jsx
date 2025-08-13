import { useState } from 'react'
import './App.css'
import TextUtils from './Components/TextUtils/TextUtils'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TextUtils/>
    </>
  )
}

export default App
