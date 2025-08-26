import { Navbar } from './Navbar';
import './App.css';

const generateRandomInt = () => {
  return Math.floor(Math.random() * 20) + 1;
};

function App() {
  return (
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
  )
}

export default App
