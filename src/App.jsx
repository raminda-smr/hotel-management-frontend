import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='w-full h-[100vh] bg-blue-900'></div>
    </>
  )
}

export default App
