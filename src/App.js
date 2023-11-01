import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" />
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
