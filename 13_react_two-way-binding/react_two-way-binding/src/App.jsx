import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'

function App() {
  const [inputValue, setInputValue] = useState()

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <>
      <Input onChange={handleInputChange}/>
      <div>The InputValue is {inputValue}</div>
    </>
  )
}

export default App
