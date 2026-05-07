import Link from "next/link";
import Image from "next/image";
import insignia from '../public/insignia.png'

export default function Header() {
    const pages = [
        { name: 'Resume', path: '/resume'},
        { name: 'Projects', path: '/projects' },
        { name: 'Speedtyping', path: '/speedtyping' },
        { name: 'Competitive Programming', path: '/competitive-programming' }
    ];

    return (
        <div className="header-nav">
            <Link href="/">
                <Image className="darken" src={insignia} alt="Insignia" width={30} height={30} style={{paddingRight: '10px'}}/>
            </Link>
            <div className="nav-dropdown">
                <svg className="nav-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="nav-menu">
                    {pages.map(page => (
                        <div key={page.path}>
                            <Link href={page.path}>{page.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}