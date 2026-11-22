import { fade, type TransitionConfig } from "svelte/transition"
import { cubicIn, cubicOut } from "svelte/easing";

type Transition = (node: HTMLElement) => TransitionConfig;

const fadeIn = (node: HTMLElement): TransitionConfig =>
    fade(node, { duration: 300, delay: 300, easing: cubicOut });

const fadeOut = (node: HTMLElement): TransitionConfig =>
    fade(node, { duration: 300, easing: cubicIn });

const pageIn = (node: HTMLElement): TransitionConfig => ({
    duration: 250,
    delay: 40,
    easing: cubicOut,
    css: (t, u) => `opacity: ${t}; transform: translateY(${10 * u}px) scale(${1 - 0.015 * u})`
});

const pageOut = (node: HTMLElement): TransitionConfig => ({
    duration: 150,
    easing: cubicIn,
    css: (t, u) => `opacity: ${t}; transform: translateY(${-10 * u}px) scale(${1 + 0.015 * u})`
});

export { fadeIn, fadeOut, pageIn, pageOut, type Transition };