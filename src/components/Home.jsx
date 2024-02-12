import React, { useEffect, useState } from 'react'
import './Home.css'
import Products from './Products'
import './ProductDiv.css'
const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([])
    useEffect(() => {
        async function FetchData() {
            const res = await fetch('https://fakestoreapi.com/products')

            const data = await res.json();
            const newData = [...products, ...data]
            setProducts(newData)
            console.log(newData)
        }

        FetchData()

    }, [])
    return (
        <>

            <div className='Weclome'>Weclome to Home Page</div>
            <div className='ProductDiv'>
                    {
                    products.map((product  , index) => {
                      return  <Products image={product.image} title={product.title} price={product.price}  key={index} cart={cart} setCart={setCart} id={index}  prodcutsArray={products}/>
                    })
                } 
            </div>
        </>
    )
}

export default Home