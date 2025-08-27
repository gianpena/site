import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { AboutMe } from './sections/AboutMe';
import { Projects } from './sections/Projects';
import './App.css';

const LandingPage = () => {
  return (
    <div className="center-content" style={{
        color: '#ffffff'
    }}>
      <h1 className="playfair-display italic">
          “You can lead a crafter to diamonds, but you can’t make him mine.”
      </h1>
      <h2 className="playfair-display">
        Things will eventually go here.
      </h2>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
