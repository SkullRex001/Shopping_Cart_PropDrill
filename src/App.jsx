
import './App.css'
import Header from './components/Header'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './components/Home'


function App() {


  return (
    <>
    <BrowserRouter>
   <Header/>
   <Home/>
   <Routes>
    <Route path='/' />
   </Routes>

   </BrowserRouter>
    </>
  )
}

export default App
