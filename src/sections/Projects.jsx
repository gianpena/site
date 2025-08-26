import '../App.css';

function Project({ title, description, link }) {
  return (
    <div
      className="project-card"
      style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        padding: '24px',
        margin: '16px 0',
        transition: 'transform 0.2s',
        border: '1px solid #ececec',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <h3
        className="playfair-display"
        style={{
          margin: '0 0 12px 0',
          fontSize: '1.6rem',
          color: '#222',
        }}
      >
        {title}
      </h3>
      <p style={{ margin: '0 0 16px 0', color: '#555' }}>{description}</p>
      {link && (
        <a
          className="playfair-display"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(90deg,#0077ff,#00c6ff)',
            color: '#fff',
            padding: '8px 18px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0,119,255,0.10)',
            transition: 'background 0.2s',
          }}
        >
          View Project
        </a>
      )}
    </div>
  );
}

export function Projects() {
    return (
        <div className="center-content">
            <Project title="Bedstats" description="A discord bot made to track Hypixel bedwars statistics." link="https://www.bedstats.net/"/>
            <Project title="This Website!" description="Made with React, hosted on AWS." link="https://github.com/gianpena/site" />
            <div className="playfair-display" style={{color: '#ffffff'}}>
                I have more projects than just the ones listed above, but these are the ones I can publicly share!
            </div>
        </div>
    );
}