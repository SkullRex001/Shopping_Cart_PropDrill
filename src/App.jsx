
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart.jsx'
import { useState } from 'react'
function App() {
  const [cart , setCart] = useState([])

  return (
    <>
      <BrowserRouter>
        <Header cartItems={cart}/>
        <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart  cart={cart}/>} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
