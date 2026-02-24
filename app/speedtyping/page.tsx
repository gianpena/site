'use client';

import Card from '../card';
import '../styles.css';

interface TypingData {
    wpm: number,
    acc: number,
    rank: number
}

import { useState, useEffect } from 'react';

export default function SpeedTypingPage() {

    const [ time60, setTime60 ] = useState<TypingData | string>('Loading...');
    const [ time15, setTime15 ] = useState<TypingData | string>('Loading...');
    const [ typegg, setTypegg ] = useState<{wpm: number, rank: number} | string>('Loading...');

    useEffect(() => {
        async function retrieveTypingData() {
            try {
                const time60Response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/monkeytype?mode=60`);
                setTime60(await time60Response.json());
            } catch (error) {
                console.error('Error fetching MonkeyType time60 data:', error);
                setTime60('Not found. Try again later.');
            }

            try {
                const time15Response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/monkeytype?mode=15`);
                setTime15(await time15Response.json());
            } catch (error) {
                console.error('Error fetching MonkeyType time15 data:', error);
                setTime15('Not found. Try again later.');
            }

            try {
                const typeggResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/typegg`);
                setTypegg(await typeggResponse.json());
            } catch (error) {
                console.error('Error fetching TypeGG data:', error);
                setTypegg('Not found. Try again later.');
            }
        }

        retrieveTypingData();
    }, []);

    return (
        <div className="centered" style={{'gap': '20px'}}>
            <div style={{fontSize: '20px'}}>
                These are my current notable performances across the various typing websites on which I play.
            </div>

            <div className="card-container">
                <Card title="MonkeyType time60 Personal Best">
                    {typeof time60 === 'string' ? time60 : (
                        <span>WPM: {time60?.wpm.toFixed(2) ?? 'Not found. Try again later.'} {`(${time60?.acc.toFixed(2)}% accuracy, rank ${time60?.rank ?? 'not found'})`}</span>
                    )}
                </Card>
                <Card title="MonkeyType time15 Personal Best">
                    {typeof time15 === 'string' ? time15 : (
                        <span>WPM: {time15?.wpm.toFixed(2) ?? 'Not found. Try again later.'} {`(${time15?.acc.toFixed(2)}% accuracy, rank ${time15?.rank ?? 'not found'})`}</span>
                    )}
                </Card>
                <Card title="TypeGG nWPM">
                    {typeof typegg === 'string' ? typegg : (
                        <span>nWPM: {typegg?.wpm.toFixed(2) ?? 'Not found. Try again later.'} (rank {typegg?.rank ?? 'not found'})</span>
                    )}
                </Card>
            </div>
        </div>
    );

}