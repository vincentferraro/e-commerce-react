import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import About from './component/About/About';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
