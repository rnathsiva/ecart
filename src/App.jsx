import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import View from './Pages/View'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/view/:id' element={<View></View>}></Route>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
    <Footer></Footer>
      
    </>
  )
}

export default App
