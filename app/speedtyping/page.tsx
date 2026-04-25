import Card from '../card';
import { Suspense } from 'react';
import '../styles.css';

async function MonkeyType({ mode }: { mode?: string }){
    const monkeytype = await fetch(`https://api.monkeytype.com/leaderboards/rank?language=english&mode=time&mode2=${mode ?? '60'}`,
        {
            method: 'GET',
            headers: {
                'Authorization': `ApeKey ${process.env.APE_KEY}`
            },
            cache: 'no-store',
        });
    if(!monkeytype.ok)
        return <span>{`Error fetching statistics for MonkeyType time${mode}.`}</span>;

    const json = await monkeytype.json();
    const { wpm, acc, rank } = json.data;
    return <span>{`WPM: ${wpm.toFixed(2)} (${acc.toFixed(2)}% accuracy, rank ${rank})`}</span>;
}

async function TypeGG() {
    const typegg = await fetch('https://api.typegg.io/v1/users/gian', { cache: 'no-store' });
    if(!typegg.ok)
        return <span>Error fetching statistics for TypeGG.</span>;

    const json = await typegg.json();
    const { nWpm } = json.stats;
    const { globalRank } = json;

    return <span>{`nWPM: ${nWpm.toFixed(2)} (rank ${globalRank})`}</span>;
}

export default async function SpeedTypingPage() {

    return (
        <div className="centered" style={{'gap': '20px'}}>
            <div style={{fontSize: '20px'}}>
                These are my current notable performances across the various typing websites on which I play.
            </div>

            <div className="card-container">
                <Card title="MonkeyType time60 Personal Best">
                    <Suspense fallback={<span className="loading">Loading</span>}>
                        <MonkeyType />
                    </Suspense>
                </Card>
                <Card title="MonkeyType time15 Personal Best">
                    <Suspense fallback={<span className="loading">Loading</span>}>
                        <MonkeyType mode='15' />
                    </Suspense>
                </Card>
                <Card title="TypeGG nWPM">
                    <Suspense fallback={<span className="loading">Loading</span>}>
                        <TypeGG />
                    </Suspense>
                </Card>
            </div>
        </div>
    );

}