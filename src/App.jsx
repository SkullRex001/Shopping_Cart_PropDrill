
import './App.css'
import Header from './components/Header'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart.jsx'

function App() {


  return (
    <>
    <BrowserRouter>
   <Header/>
   <Home/>
   <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/cart' element = {<Cart/>}/>

   </Routes>

   </BrowserRouter>
    </>
  )
}

export default App
