import github from '../public/github.svg';
import linkedin from '../public/linkedin.svg';
import logo from '../public/logo.png';
import './Logos.css';

export function Navbar() {

    const sections = ['Projects', 'About Me'];

    return (
        <div style={{
            width: '100%',
            height: '60px',
            backgroundColor: '#ffffff',
            borderRadius: '0',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center'
        }}>
            <a href="https://github.com/gianpena" target="_blank" rel="noopener noreferrer">
                <img className="logo-style" src={github} alt="GitHub"/>
            </a>
            <a href="https://linkedin.com/in/gian-pena" target="_blank" rel="noopener noreferrer">
                <img className="logo-style" src={linkedin} alt="LinkedIn"/>
            </a>
            <span style={{
                display: 'inline-block',
                width: '4px',
                height: '32px',
                backgroundColor: '#787878',
                margin: '0 16px'
            }} />
            {sections.map((section, index) => (
                <div className="navbar-section" style={{
                    color: '#000',
                    paddingLeft: index ? '10px' : '0px'
                }}>
                    {section}
                </div>
            ))}
            <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#000',
                borderRadius: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                right: '20px'
            }}>
                <img src={logo} alt="Logo" style={{ width: '24px', height: '24px', paddingBottom: '2px' }} />
            </div>
        </div>
    );
}