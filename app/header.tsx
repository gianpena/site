"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import insignia from '../public/insignia.png'

export default function Header() {
    const pages = [
        { name: 'Resume', path: '/resume'},
        { name: 'Projects', path: '/projects' },
        { name: 'Speedtyping', path: '/speedtyping' },
        { name: 'Competitive Programming', path: '/competitive-programming' }
    ];

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;
        const handlePointerDown = (event: PointerEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('pointerdown', handlePointerDown);
        return () => document.removeEventListener('pointerdown', handlePointerDown);
    }, [open]);

    return (
        <div className="header-nav">
            <Link href="/">
                <Image className="darken" src={insignia} alt="Insignia" width={30} height={30} style={{paddingRight: '10px'}}/>
            </Link>
            <div ref={dropdownRef} className={`nav-dropdown${open ? ' nav-open' : ''}`}>
                <svg onClick={() => setOpen(prev => !prev)} className="nav-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="nav-menu">
                    {pages.map(page => (
                        <div key={page.path}>
                            <Link href={page.path} style={{ textDecoration: 'none' }} onClick={() => setOpen(false)}>{page.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
