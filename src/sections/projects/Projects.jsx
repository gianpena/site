import "../App.css"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
  return (
    <div className="center-content" style={{ textAlign: "center" }}>
      <ProjectCard
        title="Bedstats"
        description="A discord bot made to track Hypixel bedwars statistics."
        link="https://www.bedstats.net/"
      />
      <ProjectCard
        title="This Website!"
        description="Made with React, hosted by yours truly."
        link="https://github.com/gianpena/site"
      />
      <div className="general-site-font" style={{ color: "#ffffff" }}>
        I have more projects than just the ones listed above, but these are the
        ones I can publicly share!
      </div>
    </div>
  )
}
