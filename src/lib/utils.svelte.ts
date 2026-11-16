import { fade, type TransitionConfig } from "svelte/transition"
import { linear } from "svelte/easing";

const easing = linear;

const fadeIn = (node: HTMLElement): TransitionConfig =>
    fade(node, { duration: 300, delay: 300, easing });

const fadeOut = (node: HTMLElement): TransitionConfig =>
    fade(node, { duration: 300, easing });

const pageIn = (node: HTMLElement): TransitionConfig =>
    fade(node, { duration: 200, easing });


export { fadeIn, fadeOut, pageIn };