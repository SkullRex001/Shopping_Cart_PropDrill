import React from 'react'
import CartProducts from './CartProduct'
import './Product.css'
import CartFooter from './CartFooter'

const Cart = ({cart}) => {
  return (
    <>
    <div className='CartTitle'>This is Your Cart</div>

    <div className='FinalCart'> 
        {cart.map((product , index)=>{
           return <CartProducts image={product.image} title={product.title} price={product.price} key={index}/>
        })}
    </div>

    <CartFooter cartItems={cart}/>
    </>
  )
}

export default Cart