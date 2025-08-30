import { useState, useEffect, useCallback } from 'react';
import '../App.css';

function StatsCard({website, statisticName, statistic}) {
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

export function SpeedTyping() {
    const [textBests, setTextBests] = useState('Loading...');
    const [monkeytypetime60, setMonkeytypetime60] = useState('Loading...');
    const [monkeytypetime15, setMonkeytypetime15] = useState('Loading...');

    const monkeytypeRequest60 = useCallback(async () => {
      try {
          const monkeytype_time60_response = await fetch('https://api.gianpena.xyz:3001/monkeytype/60');
          const monkeytype_time60_json = await monkeytype_time60_response.json();
          setMonkeytypetime60(monkeytype_time60_json.stats);
      } catch (e) {
          console.log('Error fetching monkeytype 60s data:', e);
      }
    }, []);

    const monkeytypeRequest15 = useCallback(async () => {
      try {
        const monkeytype_time15_response = await fetch('https://api.gianpena.xyz:3001/monkeytype/15');
        const monkeytype_time15_json = await monkeytype_time15_response.json();
        setMonkeytypetime15(monkeytype_time15_json.stats);
      } catch (e) {
          console.log('Error fetching monkeytype 15s data:', e);
      }
    }, []);

    const typeracerRequest = useCallback(async () => {
      try {
          const typeracer_response = await fetch('https://api.gianpena.xyz:3001/typeracer');
          const typeracer_json = await typeracer_response.json();
          setTextBests(typeracer_json.stats);
      } catch (e) {
          console.log('Error fetching typeracer data:', e);
      }
    }, []);

    useEffect(() => {
      monkeytypeRequest60();
      monkeytypeRequest15();
      typeracerRequest();
    }, []);

    return (
      <div className="center-content" style={{ textAlign: 'center' }}>
          <h1 className="general-site-font" style={{
              color: '#ffffff', 
              fontSize: '2.5rem',
              margin: '0 0 100px 0'
          }}>
              My speedtyping "career" in summary
          </h1>
          
          <div style={{
              maxWidth: '420px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
          }}>
              <StatsCard website="Monkeytype (time60)" statisticName="WPM" statistic={monkeytypetime60} />
              <StatsCard website="Monkeytype (time15)" statisticName="WPM" statistic={monkeytypetime15} />
              <StatsCard website="Typeracer" statisticName="Average best wpm (all quotes)" statistic={textBests} />
          </div>
      </div>
    );
}
