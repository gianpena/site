import '../App.css';

export function AboutMe() {
    return (
        <div className="center-content">
            <h1 className="playfair-display">
                Who am I?
            </h1>
            <p style={{
                maxWidth: '600px',
                textAlign: 'center',
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#333'
            }}>
                <div className="playfair-display" style={{
                    color: '#ffffff'
                }}>
                    I'm Gian Peña, a student at Florida International University's 
                    College of Engineering and Computing. I'm a competitive programmer, 
                    and the current "captain" of FIU's ICPC team. I also love speedtyping
                    (currently top 100 worldwide on monkeytype and typeracer!) and playing
                    video games. Thanks for stopping by!
                </div>
            </p>
        </div>
    );
}