import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Product from './components/Product';
import ABout from './components/ABout';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<ABout />} />
      </Routes>
    </div>
  );
}

export default App;
