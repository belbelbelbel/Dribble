import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NvaBar } from './NvaBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Header } from './Pages/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
        <BrowserRouter>
        <NvaBar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
