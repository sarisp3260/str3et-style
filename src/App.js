import './App.css';
import { Routes, Route, useLocation, useParams } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart';
/* import Navbar from './components/Navbar/Navbar'; */


function App() {
  const {itemFilter} = useParams()
  const location = useLocation()
  /* console.log(location) */
  return (
    <>
      {location.pathname !== '/' && location.pathname !== '/Productos'  && location.pathname !== '/Carrito' && itemFilter !== undefined ? null : <Navbar textColor='text-primary'/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Productos' element={<Products/>}/>
        <Route path='/Productos/filter/:itemFilter' element={<Products/>}/>
        <Route path='/Carrito' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      {location.pathname !== '/' && location.pathname !== '/Productos' && location.pathname !== '/Carrito' && itemFilter !== undefined ? null : <Footer/>}
      {/* <Footer/> */}
  </>
  );
}

export default App;

