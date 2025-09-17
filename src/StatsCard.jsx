import './App.css'
export function StatsCard({website, statisticName, statistic}) {
    return (
        <div
          className="stats-card"
          style={{
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            padding: '24px',
            margin: '0 0 16px 0',
            transition: 'transform 0.2s',
            border: '1px solid #ececec',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <h3
            className="general-site-font"
            style={{
              margin: '0 0 12px 0',
              fontSize: '1.6rem',
              color: '#222',
            }}
          >
            {website}
          </h3>
          <p className="general-site-font" style={{ margin: '0 0 16px 0', color: '#555' }}>{statisticName}: {statistic}</p>
        </div>
      );
}