import type { LayoutServerLoad } from './$types';
import { $ } from 'bun';

export const load: LayoutServerLoad = async () => {
    let current_hash = await $`git --git-dir=/git/.git rev-parse --short HEAD`.text();
    return { current_hash };
};