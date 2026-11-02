import type { PageServerLoad } from './$types';
import { typeggQualifierPlacement } from '$lib/utils.svelte';

export const load: PageServerLoad = async() => {
    const rankings = await typeggQualifierPlacement();
    const entry = rankings.find(({ name }) => name === "gian");
    const time = Math.floor(Date.now() / 1000);

    return { entry, time };
};