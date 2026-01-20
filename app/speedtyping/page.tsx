import Card from '../card';
import '../styles.css';
const monkeytype_api_key = process.env.APE_KEY;

async function monkeytype(mode: string, mode2: string | number) {
    const response = await fetch(`https://api.monkeytype.com/leaderboards/rank?language=english&mode=${mode}&mode2=${mode2}`, {
        headers: {
            'Authorization': `ApeKey ${monkeytype_api_key}`
        }
    });

    if(!response.ok) return {};
    return await response.json();
}


export default async function SpeedTypingPage() {

    const time60 = await monkeytype('time', 60);
    const time15 = await monkeytype('time', 15);

    return (
        <div className="centered" style={{'gap': '20px'}}>
            <div style={{fontSize: '20px'}}>
                These are my current notable performances across the various typing websites on which I play.
            </div>

            <div className="card-container">
                <Card title="MonkeyType time60 Personal Best">
                    WPM: {time60?.data?.wpm.toFixed(2) ?? 'Not found. Try again later.'} wpm {`(${time60?.data?.acc.toFixed(2)}% accuracy)`}
                </Card>
                <Card title="MonkeyType time15 Personal Best">
                    WPM: {time15?.data?.wpm.toFixed(2) ?? 'Not found. Try again later.'} wpm {`(${time15?.data?.acc.toFixed(2)}% accuracy)`}
                </Card>
            </div>
        </div>
    );

}