
export async function GET() {
    const typegg = await fetch("https://api.typegg.io/v1/users/gian");
    if(!typegg.ok) {
        return new Response("Failed to fetch TypeGG data.", { status: 500 });
    }

    const typeggJson = await typegg.json();
    const { nWpm } = typeggJson.stats;
    const { globalRank } = typeggJson;

    return new Response(JSON.stringify({ wpm: nWpm, acc: -1, rank: globalRank }));
}