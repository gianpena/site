import { useState, useEffect } from "react"
import { UsernameContext } from "./UsernameContext.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./Navbar"
import { HomePage } from "./HomePage"
import { Projects } from "./sections/projects/Projects"
import { SpeedTyping } from "./sections/speedtyping/SpeedTyping"
import "./sections/App.css"

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
          <Route path="/speedtyping" element={<SpeedTyping />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UsernameContext>
  )
}

export default App
