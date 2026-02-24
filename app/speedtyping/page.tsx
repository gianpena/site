import Card from '../card';
import '../styles.css';

interface TypingData {
    wpm: number,
    acc: number,
    rank: number
}

export default async function SpeedTypingPage() {

    let time60: TypingData | null = null;
    let time15: TypingData | null = null;
    let typegg: TypingData | null = null;
    try {
        const time60Response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/monkeytype?mode=60`);
        const time15Response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/monkeytype?mode=15`);
        const typeggResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/typegg`);

        time60 = await time60Response.json();
        time15 = await time15Response.json();
        typegg = await typeggResponse.json();
    } catch (error) {
        console.error('Error fetching typing data:', error);
    }

    return (
        <div className="centered" style={{'gap': '20px'}}>
            <div style={{fontSize: '20px'}}>
                These are my current notable performances across the various typing websites on which I play.
            </div>

            <div className="card-container">
                <Card title="MonkeyType time60 Personal Best">
                    WPM: {time60?.wpm.toFixed(2) ?? 'Not found. Try again later.'} {`(${time60?.acc.toFixed(2)}% accuracy, rank ${time60?.rank ?? 'not found'})`}
                </Card>
                <Card title="MonkeyType time15 Personal Best">
                    WPM: {time15?.wpm.toFixed(2) ?? 'Not found. Try again later.'} {`(${time15?.acc.toFixed(2)}% accuracy, rank ${time15?.rank ?? 'not found'})`}
                </Card>
                <Card title="TypeGG nWPM">
                    nWPM: {typegg?.wpm ?? 'Not found. Try again later.'} (rank {typegg?.rank ?? 'not found'})
                </Card>
            </div>
        </div>
    );

}