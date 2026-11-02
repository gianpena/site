import { fade, type TransitionConfig } from "svelte/transition"
import { linear } from "svelte/easing";

const easing = linear;

const fadeIn = (node: HTMLElement): TransitionConfig =>
    fade(node, { duration: 300, delay: 300, easing });

const fadeOut = (node: HTMLElement): TransitionConfig =>
    fade(node, { duration: 300, easing });

const pageIn = (node: HTMLElement): TransitionConfig =>
    fade(node, { duration: 200, easing });


interface QualifierRanking {
    rank: number;
    username: string;
    score: number;
    isEligible: boolean;
}

const typeggQualifierPlacement = async (): Promise<QualifierRanking> => {
    const response = await fetch("https://api.typegg.io/v1/championships/2026/qualifier");
    const data = await response.json();
    const entry = data?.users?.find(({ username }: QualifierRanking) => username === "gian");
    if(!entry)
        throw new Error("Unable to fetch TypeGG championship qualifier leaderboard.");

    return entry;

};

const numberEnding = (n: number): string => {
    if([11,12,13].includes(n%100)) return "th";
    if(n%10 === 1) return "st";
    if(n%10 === 2) return "nd";
    if(n%10 === 3) return "rd";
    return "th";
};


export { fadeIn, fadeOut, pageIn, typeggQualifierPlacement, numberEnding };
export type { QualifierRanking };