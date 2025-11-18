import { useState, useEffect, useCallback } from "react"
import "../App.css"
import { TypingStatsCard } from "./TypingStatsCard"

export function SpeedTyping() {
  const [textBests, setTextBests] = useState("Loading...")
  const [monkeytypetime60, setMonkeytypetime60] = useState("Loading...")
  const [monkeytypetime15, setMonkeytypetime15] = useState("Loading...")
  const [typeggWPM, setTypeggWPM] = useState("Loading...")
  const [monkeytypeLink, setMonkeytypeLink] = useState("")

  const monkeytypeRequest60 = useCallback(async () => {
    try {
      const monkeytype_time60_response = await fetch(
        "https://api.gianpena.xyz/monkeytype/60"
      )
      const monkeytype_time60_json = await monkeytype_time60_response.json()
      setMonkeytypetime60(monkeytype_time60_json.stats)
      setMonkeytypeLink(monkeytype_time60_json.link)
    } catch (e) {
      console.log("Error fetching monkeytype 60s data:", e)
    }
  }, [])

  const monkeytypeRequest15 = useCallback(async () => {
    try {
      const monkeytype_time15_response = await fetch(
        "https://api.gianpena.xyz/monkeytype/15"
      )
      const monkeytype_time15_json = await monkeytype_time15_response.json()
      setMonkeytypetime15(monkeytype_time15_json.stats)
      setMonkeytypeLink(monkeytype_time15_json.link)
    } catch (e) {
      console.log("Error fetching monkeytype 15s data:", e)
    }
  }, [])

  const typeracerRequest = useCallback(async () => {
    try {
      const typeracer_response = await fetch(
        "https://api.gianpena.xyz/typeracer"
      )
      const typeracer_json = await typeracer_response.json()
      setTextBests(typeracer_json.stats)
    } catch (e) {
      console.log("Error fetching typeracer data:", e)
    }
  }, [])

  const typeggRequest = useCallback(async () => {
    try {
      const typegg_response = await fetch(
        "https://api.gianpena.xyz/typegg"
      )
      const typegg_json = await typegg_response.json()
      setTypeggWPM(typegg_json.nWpm);
    } catch (e) {
      console.log("Error fetching type.gg data:", e)
    }
  }, [])

  useEffect(() => {
    monkeytypeRequest60()
    monkeytypeRequest15()
    typeracerRequest()
    typeggRequest()
  }, [])

  return (
    <div
      className="center-content"
      style={{
        textAlign: "center",
        paddingTop: "32px", // less padding
        minHeight: "100vh",
        boxSizing: "border-box",
        overflow: "hidden"
      }}
    >
      <h1
        className="general-site-font"
        style={{
          color: "#ffffff",
          fontSize: "2rem", // slightly smaller
          margin: "0 0 24px 0" // less margin
        }}
      >
        My speedtyping "career" in summary
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          columnGap: "60px", // wider horizontal gap
          rowGap: "0px",    // vertical gap
          maxWidth: "650px",
          margin: "0 auto"
        }}
      >
        <TypingStatsCard
          website="Monkeytype (time60)"
          statisticName="WPM"
          statistic={monkeytypetime60}
          link={monkeytypeLink}
        />
        <TypingStatsCard
          website="Monkeytype (time15)"
          statisticName="WPM"
          statistic={monkeytypetime15}
          link={monkeytypeLink}
        />
        <TypingStatsCard
          website="Typeracer"
          statisticName="Average best wpm (all of my quotes)"
          statistic={textBests}
          link="https://www.typeracerdata.com/profile?username=gianthetaco"
        />
        <TypingStatsCard
          website="Type.GG"
          statisticName="Normalized WPM"
          statistic={typeggWPM}
          link="https://typegg.io/user/gian"
        />
      </div>
    </div>
  )
}
