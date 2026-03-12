import { useState, useRef, useEffect } from 'react';

export default function usePeriods(){
    const [periods, setPeriods] = useState<number>(1);
    const periodsInterval = useRef<number | null>(null);

    useEffect(() => {
        periodsInterval.current = window.setInterval(() => {
            setPeriods(p => {
                p--;
                p = (p+1) % 3;
                p++;
                return p;
            });
        }, 100);

        return () => {
            if(periodsInterval.current !== null)
                clearInterval(periodsInterval.current);
        }
    }, []);

    return periods;
}