import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className='Header'>
        <p>E-Shop</p>
        <div className='HeaderLink'>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart </Link>
        </div>
        <p>Cart Item: 0</p>
    </div>

    </>
  )
}

export default Header