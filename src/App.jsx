import { useState, useEffect } from "react"
import { UsernameContext } from "./UsernameContext.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./Navbar"
import { AboutMe } from "./sections/about/AboutMe"
import { Projects } from "./sections/projects/Projects"
import { SpeedTyping } from "./sections/speedtyping/SpeedTyping"
import "./sections/App.css"

const LandingPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let id = setTimeout(() => {
      setShow(true);
    }, 500);

    return () => clearTimeout(id);
  }, []);

  return (
    <div
      className="center-content"
      style={{
        color: "#ffffff"
      }}
    >
      <h1 className="general-site-font italic fade-in">
        “You can lead a crafter to diamonds, but you can’t make him mine.”
      </h1>
      <h2 className={`general-site-font ${show ? "fade-in" : "invisible"}`}>Things will eventually go here.</h2>
    </div>
  )
}

function App() {
  const [discordUsername, setDiscordUsername] = useState("")
  useEffect(() => {
    async function getUsername() {
      const response = await fetch("https://api.gianpena.xyz/username")
      const json = await response.json()
      return json.username
    }

    getUsername().then(username => {
      setDiscordUsername(username)
    })
  }, [])

  return (
    <UsernameContext value={discordUsername}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/speedtyping" element={<SpeedTyping />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </UsernameContext>
  )
}

export default App
