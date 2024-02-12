import React from 'react'
import './Product.css'


const CartProducts = ({image , title , price}) => {
  return (
    <div className='Product'>
        <img src={image} alt="Product Image"  className='Image'/>
        <div className='About' >
            <div>{title}</div>
            <div>${price}</div>
        </div>


    </div>
  )
}

export default CartProducts