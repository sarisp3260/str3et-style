import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Navbar from './components/Navbar/Navbar';
/* import Navbar from './components/Navbar/Navbar'; */


function App() {
  const location = useLocation()
  /* console.log(location) */
  return (
    <>
      <Navbar textColor='text-primary'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Productos' element={<Products/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      {location.pathname !== '*' && <Footer/>}
      {/* <Footer/> */}
  </>
  );
}

export default App;

