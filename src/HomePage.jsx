import "./sections/App.css"
import { useState, useEffect } from "react"
import { GeneralStatsCard } from "./GeneralStatsCard"

export function HomePage() {
  const [show, setShow] = useState(false);
  
    useEffect(() => {
      let id = setTimeout(() => {
        setShow(true);
      }, 600);
  
      return () => clearTimeout(id);
    }, []);

  return (
    <div
      className="center-content"
      style={{
        color: "#ffffff"
      }}
    >
      <h1 className="general-site-font fade-in">Hey there!</h1>
      <p
        style={{
          maxWidth: "600px",
          textAlign: "center",
          fontSize: "18px",
          lineHeight: "1.6"
        }}
      >
        <span className={`general-site-font ${show ? "fade-in" : "invisible"}`}>
          I'm Gian Peña, a student at Florida International University's College
          of Engineering and Computing. I'm a competitive programmer, and the
          current "captain" of FIU's ICPC team. I also love speedtyping
          (currently top 100 worldwide on monkeytype and typeracer!) and playing
          video games. Thanks for stopping by!
        </span>
      </p>
      <GeneralStatsCard
        link="https://leetcard.jacoblin.cool/gpena1?theme=nord&font=Cairo"
        baseLoadingMessage="Loading LeetCode stats card"
      />
    </div>
  )
}
