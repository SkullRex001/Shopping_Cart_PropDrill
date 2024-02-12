import React from 'react'
import './Product.css'

const Product = [{
"id":1,
"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price":109.95,
"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
"rating":{"rate":3.9,"count":120}}]



const Products = () => {
  return (
    <div className='Product'>
        <img src={Product[0].image} alt="Product Image"  className='Image'/>
        <div className='About' >
            <div>{Product[0].title}</div>
            <div>{Product[0].price}</div>
            <div>{Product[0].description}</div>

        </div>


    </div>
  )
}

export default Products