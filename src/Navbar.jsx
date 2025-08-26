import github from '../public/github.svg';
import linkedin from '../public/linkedin.svg';
import './Logos.css';

export function Navbar() {
    return (
        <div style={{
            width: '100%',
            height: '60px',
            backgroundColor: '#ffffff',
            borderRadius: '0',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000
        }}>
            <a href="https://github.com/gianpena" target="_blank" rel="noopener noreferrer">
                <img className="logo-style" src={github} alt="GitHub"/>
            </a>
            <a href="https://linkedin.com/in/gian-pena" target="_blank" rel="noopener noreferrer">
                <img className="logo-style" src={linkedin} alt="LinkedIn"/>
            </a>
        </div>
    );
}
