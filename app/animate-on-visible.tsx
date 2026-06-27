'use client';

import { useEffect, useRef } from 'react';

export default function AnimateOnVisible({ children, className, style }: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const start = () => el.classList.add('anim-ready');

        if (document.visibilityState === 'visible') {
            start();
        } else {
            const handler = () => {
                if (document.visibilityState === 'visible') {
                    start();
                    document.removeEventListener('visibilitychange', handler);
                }
            };
            document.addEventListener('visibilitychange', handler);
            return () => document.removeEventListener('visibilitychange', handler);
        }
    }, []);

    return (
        <div ref={ref} className={`anim-wrapper${className ? ` ${className}` : ''}`} style={style}>
            {children}
        </div>
    );
}
