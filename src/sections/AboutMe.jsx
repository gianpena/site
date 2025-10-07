import { useState, useEffect, useRef, useCallback } from 'react';
import '../App.css';

export function AboutMe() {
    const statsCardMessage = useRef('Loading LeetCode stats card...');
    const [periods, setPeriods] = useState(2); // zero-based with +1 offset later
    const [imageResolved, setImageResolved] = useState(false);
    const [error, setError] = useState('');
    const intervalId = useRef(-1);

    function cleanup() {
        if(intervalId.current !== -1) {
            clearInterval(intervalId.current);
            intervalId.current = -1;
        }
    }

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setPeriods(p => {
                p = (p + 1) % 3;
                statsCardMessage.current = `Loading LeetCode stats card${'.'.repeat(p+1)}`;
                return p;
            });
        }, 250);

        return cleanup;
    }, []);

    return (
        <div className="center-content" style={{
            color: '#ffffff'
        }}>
            <h1 className="general-site-font">
                Who am I?
            </h1>
            <p style={{
                maxWidth: '600px',
                textAlign: 'center',
                fontSize: '18px',
                lineHeight: '1.6',
            }}>
                <div className="general-site-font">
                    I'm Gian Peña, a student at Florida International University's 
                    College of Engineering and Computing. I'm a competitive programmer, 
                    and the current "captain" of FIU's ICPC team. I also love speedtyping
                    (currently top 100 worldwide on monkeytype and typeracer!) and playing
                    video games. Thanks for stopping by!
                </div>
            </p>
            {!imageResolved && (
                <div className="general-site-font" style={{
                         color: '#fff',
                         fontStyle: 'italic',
                         minHeight: '200px',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center'
                     }}>
                    {statsCardMessage.current || error}
                     </div>
            )}
            <div align="center" style={{ marginTop: '50px' }}>
                <img src="https://leetcard.jacoblin.cool/gpena1?theme=nord&font=Cairo" alt="LeetCode Stats"
                onLoad={() => {
                    cleanup();
                    setImageResolved(true);
                }}
                onError={() => {
                    cleanup();
                    statsCardMessage.current = '';
                    setError('Something went wrong loading the card. Try again later!');
                }} />
            </div>
        </div>
    );
}