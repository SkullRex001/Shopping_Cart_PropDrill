import React from 'react'
import './Product.css'


const Products = ({image , title , price , cart , setCart , id , prodcutsArray}) => {
    function AddtoCart(index){
        const newCart = [...cart]; 
        newCart.push(prodcutsArray[index]); 
        setCart(newCart); 
        console.log(newCart)
    }
  return (
    <div className='Product'>
        <img src={image} alt="Product Image"  className='Image'/>
        <div className='About' >
            <div>{title}</div>
            <div>${price}</div>
            <button onClick={()=>{AddtoCart(id)}}>Add to Cart</button>
        </div>


    </div>
  )
}

export default Products