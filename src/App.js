import './App.css';
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Navbar from './components/Navbar/Navbar';
/* import Navbar from './components/Navbar/Navbar'; */


function App() {
 /*  const location = useLocation() */
  return (
    <>
      {/* {location.pathname !== "/" ? <Navbar/> : null} */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Productos' element={<Products/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
  </>
  );
}

export default App;

