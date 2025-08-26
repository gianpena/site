import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import './App.css';

const generateRandomInt = () => {
  return Math.floor(Math.random() * 20) + 1;
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="center-content">
          <h1 className="playfair-display italic">
            Yowza!
          </h1>
          <h2 className="playfair-display">
            Things will eventually go here.
          </h2>
        </div>
      </div>
      <Routes>
        <Route path="/projects" element={null} />
        <Route path='/about' element={null} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
