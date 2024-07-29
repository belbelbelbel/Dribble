import './App.css'
import { NvaBar } from './NvaBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'

function App() {

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
