<script lang="ts">

    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { cubicIn } from 'svelte/easing';

    let monkeytype_uid: string = "SoJQKReSXhQlSySyomOEOiorGAJ3";
    let typegg_uid: string = "4246w9nru2u5t16";

    type SpeedRecord = { wpm: string, rank: number, acc?: string } | null | undefined;

    let speeds: { [key: string]: SpeedRecord } = $state({
        "Monkeytype (15 seconds):": undefined,
        "Monkeytype (60 seconds):": undefined,
        "TypeGG (overall):": undefined
    });

    async function monkeytype(mode: string, key: string) {
        const response = await fetch(`https://api.monkeytype.com/leaderboards?language=english&mode=time&mode2=${mode}&pageSize=100`);
        if(!response.ok) {
            speeds[key] = null;
            throw new Error(`Unable to retrieve Monkeytype ${mode}s data: ${response.status}`);
        }
        const leaderboard = (await response.json()) as { data: { entries: { uid: string, wpm: number, acc: number, rank: number }[] } };
        if(!(leaderboard?.data?.entries)) return;

        const entry = leaderboard.data.entries.find(e => e.uid === monkeytype_uid);
        if(!entry) return;

        speeds[key] = { wpm: entry.wpm.toFixed(2), acc: entry.acc.toFixed(2), rank: entry.rank };
    }

    async function typegg() {
        const response = await fetch(`https://api.typegg.io/v1/users/${typegg_uid}`);
        if(!response.ok) {
            speeds["TypeGG (overall):"] = null;
            throw new Error(`Unable to retrieve TypeGG data: ${response.status}`);
        }
        const user = (await response.json()) as { globalRank: number, stats: { nWpm: number } };
        if(!user) return;

        speeds["TypeGG (overall):"] = { wpm: user.stats.nWpm.toFixed(2), rank: user.globalRank };
    }

    onMount(async () => {
        await Promise.all([
            monkeytype("15", "Monkeytype (15 seconds):"),
            monkeytype("60", "Monkeytype (60 seconds):"),
            typegg()
        ]);
    });

</script>

{#snippet speed(value: SpeedRecord)}
    {#if value}
        {const details = (value.acc ? [`${value.acc}%`] : []).concat([`rank ${value.rank}`]);}
        <span in:fade={{ duration: 300, delay: 300, easing: cubicIn }} out:fade={{ duration: 300, easing: cubicIn }}>{value.wpm} WPM ({details.join(", ")})</span>    
    {:else if value === null}
        <span in:fade={{ duration: 300, delay: 300, easing: cubicIn }} out:fade={{ duration: 300, easing: cubicIn }}>Failed to retrieve value.</span>
    {:else}
        <span in:fade={{ duration: 300, delay: 300, easing: cubicIn }} out:fade={{ duration: 300, easing: cubicIn }} class="loading">Loading</span>
    {/if}
{/snippet}

<div class="flex-1 flex flex-col gap-6 text-[20pt]">
    <span>I've been speedtyping for over 10 years, and am top 100 on major platforms like Monkeytype, TypeRacer, and TypeGG. I got especially interested in active improvement (as opposed to simply speedtyping for fun) in the summer of 2023, and I've been typing more actively since.</span>
    <span>You can check out some of my most notable stats below!</span>
    <div class="flex flex-col text-[9pt] md:text-[12pt] mt-[20px] font-mono">
        {#each Object.entries(speeds).sort() as [key, value] (key)}
            <div class="flex flex-row gap-2">
                <div>
                    <span>{key}</span>
                    {@render speed(value)}
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .loading::after {
        content: "";
        display: inline-block;
        width: 3ch;
        animation: dots 0.2s steps(1) infinite;
    }

    @keyframes dots {
        0% { content: "."; }
        33% { content: ".."; }
        66% { content: "..."; }
    }
</style>