import "./App.css"

export function ProjectCard({ title, description, link }) {
  return (
    <div
      className="project-card"
      style={{
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        padding: "24px",
        margin: "0 0 16px 0",
        transition: "transform 0.2s",
        border: "1px solid #ececec",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "80%",
        maxWidth: "400px"
      }}
    >
      <h3
        className="general-site-font"
        style={{
          margin: "0 0 12px 0",
          fontSize: "1.6rem",
          color: "#222"
        }}
      >
        {title}
      </h3>
      <p
        className="general-site-font"
        style={{ margin: "0 0 16px 0", color: "#555" }}
      >
        {description}
      </p>
      {link && (
        <a
          className="general-site-font"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(90deg,#0077ff,#00c6ff)",
            color: "#fff",
            padding: "8px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            boxShadow: "0 2px 8px rgba(0,119,255,0.10)",
            transition: "background 0.2s"
          }}
        >
          View Project
        </a>
      )}
    </div>
  )
}
