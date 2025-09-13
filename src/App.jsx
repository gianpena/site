import { useState, useEffect } from 'react';
import { UsernameContext } from "./UsernameContext.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { AboutMe } from './sections/AboutMe';
import { Projects } from './sections/Projects';
import { SpeedTyping } from './sections/SpeedTyping';
import './App.css';

const LandingPage = () => {
  return (
    <div className="center-content" style={{
        color: '#ffffff'
    }}>
      <h1 className="general-site-font italic">
          “You can lead a crafter to diamonds, but you can’t make him mine.”
      </h1>
      <h2 className="general-site-font">
        Things will eventually go here.
      </h2>
    </div>
  );
}

function App() {
  const [discordUsername, setDiscordUsername] = useState('');
  useEffect(() => {
    async function getUsername() {
      const response = await fetch('https://api.gianpena.xyz/username');
      const json = await response.json();
      return json.username;
    }

    getUsername().then(username => {
      setDiscordUsername(username);
    });
  }, []);

  return (
    <UsernameContext value={discordUsername}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/speedtyping' element={<SpeedTyping />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </UsernameContext>
  )
}

export default App
