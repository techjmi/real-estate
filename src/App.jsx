import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './pages/Footer'
import FormFooter from './component/FormFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
    <Routes>
      <Route path='/'element={<Home />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
