import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import  Home from './pages/home';
import Cart from './pages/cart';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
