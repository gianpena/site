
export async function GET(request: Request) {
    const mode2 = new URL(request.url).searchParams.get('mode') || '60';
    if(!['60','15'].includes(mode2))
        return Response.json({ error: 'Invalid mode. Allowed values are 60 and 15.' }, { status: 400 });

    const monkeytype = await fetch(`https://api.monkeytype.com/leaderboards/rank?language=english&mode=time&mode2=${mode2}`,
        {
            method: 'GET',
            headers: {
                'Authorization': `ApeKey ${process.env.APE_KEY}`
            }
        });
    if(!monkeytype.ok) {
        return new Response('Failed to fetch Monkeytype data.', { status: 500 });
    }

    const monkeytypeJson = await monkeytype.json();
    const { wpm, acc, rank } = monkeytypeJson.data;
    return Response.json({ wpm, acc, rank });
}