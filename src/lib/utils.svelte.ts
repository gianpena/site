import type { TransitionConfig } from "svelte/transition"
import { cubicIn } from "svelte/easing";

const fadeIn = (node: HTMLElement): TransitionConfig => ({
    duration: 300,
    delay: 300,
    easing: cubicIn,
});

const fadeOut = (node: HTMLElement): TransitionConfig => ({
    duration: 300,
    easing: cubicIn,
});


export { fadeIn, fadeOut };