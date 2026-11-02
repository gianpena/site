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
    name: string;
    username: string;
    quotes: string;
    pp: number;
    qualified: boolean;
}

const parseRankingsWithDom = (html: string): QualifierRanking[] => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const rows = doc.querySelectorAll("tr.lb-tr, tr.cutoff-row");
    const rankings: QualifierRanking[] = [];
    let qualified = true;

    for (const row of rows) {
        if (row.classList.contains("cutoff-row")) {
            qualified = false;
            continue;
        }

        const rankEl = row.querySelector("td.lb-td-rank");
        const playerEl = row.querySelector("a.lb-player");
        const quotesEl = row.querySelector("td.td-fit .v2tag-label");
        const ppEl = row.querySelector("span.lb-pp-value");

        if (!rankEl || !playerEl || !quotesEl || !ppEl) continue;

        const rank = parseInt(rankEl.textContent?.trim() ?? "", 10);
        const name = playerEl.querySelector("span.lb-player-name")?.textContent?.trim() ?? "";
        const href = playerEl.getAttribute("href") ?? "";
        const username = href.replace(/^.*\/user\//, "");
        const quotes = quotesEl.textContent?.trim() ?? "";
        const pp = parseInt(ppEl.textContent?.replace(/,/g, "").trim() ?? "", 10);

        if (rank && name) {
            rankings.push({ rank, name, username, quotes, pp, qualified });
        }
    }

    return rankings;
};

const decodeHtmlEntities = (text: string): string =>
    text
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, " ");

const stripTags = (text: string): string =>
    text.replace(/<[^>]+>/g, "");

const parseRankingsWithRegex = (html: string): QualifierRanking[] => {
    const rowRegex = /<tr\b[^>]*?\bclass="[^"]*(?:lb-tr|cutoff-row)[^"]*"[^>]*>[\s\S]*?<\/tr>/g;
    const rankRegex = /<td\b[^>]*?\bclass="[^"]*?\blb-td-rank\b[^"]*"[^>]*>([\s\S]*?)<\/td>/;
    const playerRegex = /<a\b[^>]*?\bclass="[^"]*?\blb-player\b[^"]*"[^>]*\bhref="([^"]*)"[^>]*>[\s\S]*?<span\b[^>]*?\bclass="[^"]*?\blb-player-name\b[^"]*"[^>]*>([\s\S]*?)<\/span>/;
    const quotesRegex = /<td\b[^>]*?\bclass="[^"]*?\btd-fit\b[^"]*"[^>]*>[\s\S]*?<span\b[^>]*?\bclass="[^"]*?\bv2tag-label\b[^"]*"[^>]*>([\s\S]*?)<\/span>/;
    const ppRegex = /<span\b[^>]*?\bclass="[^"]*?\blb-pp-value\b[^"]*"[^>]*>([\s\S]*?)<\/span>/;
    const rankings: QualifierRanking[] = [];
    let qualified = true;

    for (const match of html.matchAll(rowRegex)) {
        const row = match[0];
        if (/\bclass="[^"]*\bcutoff-row\b/.test(row)) {
            qualified = false;
            continue;
        }

        const rankMatch = row.match(rankRegex);
        const playerMatch = row.match(playerRegex);
        const quotesMatch = row.match(quotesRegex);
        const ppMatch = row.match(ppRegex);

        if (!rankMatch || !playerMatch || !quotesMatch || !ppMatch) continue;

        const rank = parseInt(stripTags(rankMatch[1]).trim(), 10);
        const name = decodeHtmlEntities(stripTags(playerMatch[2]).trim());
        const username = playerMatch[1].replace(/^.*\/user\//, "");
        const quotes = decodeHtmlEntities(stripTags(quotesMatch[1]).trim());
        const pp = parseInt(stripTags(ppMatch[1]).replace(/,/g, "").trim(), 10);

        if (rank && name) {
            rankings.push({ rank, name, username, quotes, pp, qualified });
        }
    }

    return rankings;
};

const typeggQualifierPlacement = async (): Promise<QualifierRanking[]> => {
    const response = await fetch("https://typegg.io/championship/2026/qualifiers");
    if (!response.ok) {
        throw new Error(`Failed to fetch qualifier rankings: ${response.status} ${response.statusText}`);
    }

    const html = await response.text();
    return typeof DOMParser !== "undefined"
        ? parseRankingsWithDom(html)
        : parseRankingsWithRegex(html);
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