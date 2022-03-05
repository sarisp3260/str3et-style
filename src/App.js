import './App.css';
import TestComponent from './pages/TestComponent';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TestComponent/>
      <Footer/>
    </div>
  );
}

export default App;
