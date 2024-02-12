import './CartFooter.css'

import React from 'react'

const CartFooter = ({cartItems}) => {
    let sum = 0;
    cartItems.forEach((item)=>{
        sum = sum + parseInt(item.price)
    })

  return (
    <div className='Footer'>
        <div>Total Price:-</div>
        <div>
            ${sum}      
        </div>

        
        </div>
  )
}

export default CartFooter