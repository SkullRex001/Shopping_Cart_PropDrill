import React from 'react'
import './Product.css'


const Products = ({image , title , price}) => {
  return (
    <div className='Product'>
        <img src={image} alt="Product Image"  className='Image'/>
        <div className='About' >
            <div>{title}</div>
            <div>${price}</div>
            <button>Add to Cart</button>
        </div>


    </div>
  )
}

export default Products