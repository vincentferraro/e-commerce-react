import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import About from './component/About/About';
import Footer from './component/Footer';
import Shop from './component/Shop/Shop';
import Contact from './component/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={ <Shop/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
