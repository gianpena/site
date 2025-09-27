import { useState } from 'react';
import '../App.css';

export function AboutMe() {
    const [statsCardMessage, setStatsCardMessage] = useState('Loading LeetCode stats card...');

    const handleImageLoad = () => {
        setStatsCardMessage('');
    };
    const handleImageError = () => {
        setStatsCardMessage('Error fetching LeetCode stats. Try again later!');
    };

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
            {statsCardMessage && (
                <div className="general-site-font" style={{
                         color: '#fff',
                         fontStyle: 'italic',
                         minHeight: '200px',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center'
                     }}>
                    {statsCardMessage}
                     </div>
            )}
            <div align="center" style={{ marginTop: '50px' }}>
                <img src="https://leetcard.jacoblin.cool/gpena1?theme=nord&font=Cairo" alt="LeetCode Stats"
                onLoad={handleImageLoad}
                onError={handleImageError} />
            </div>
        </div>
    );
}