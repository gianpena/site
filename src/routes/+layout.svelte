<script lang="ts">
	import '../app.css';
	import { pageIn, pageOut, fadeIn, fadeOut, type Transition } from '$lib/utils.svelte';
	import favicon from '$lib/assets/favicon.ico';
	import Pages from '$lib/components/Pages.svelte';
	import { page } from '$app/state';
	import NotFound from '$lib/components/NotFound.svelte';
	import type { Snippet } from 'svelte';
    import { innerWidth } from 'svelte/reactivity/window';

	let { data, children }: { data: { current_hash: string }, children: Snippet } = $props();
	
	let inTransition: Transition = $state(pageIn);
	let outTransition: Transition = $state(pageOut);

	$effect(() => {
		if(!innerWidth.current) return;

		if(innerWidth.current < 768) {
			inTransition = fadeIn;
			outTransition = fadeOut;
		} else {
			inTransition = pageIn;
			outTransition = pageOut;
		}
	});

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NotFound>
	<div class="min-h-screen flex flex-col justify-center">
		<div class="flex-1 mx-auto w-full max-w-4xl md:max-w-screen-xl px-6 py-10 flex flex-col md:flex-row gap-10 justify-center">
			<div class="grid flex-1">
				{#key page.url.pathname}
					<div in:inTransition out:outTransition class="col-start-1 row-start-1 flex flex-col">
						{@render children()}
					</div>
				{/key}
			</div>
			<Pages hash={data.current_hash}/>
		</div>
	</div>
</NotFound>
