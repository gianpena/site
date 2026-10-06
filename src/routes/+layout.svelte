<script lang="ts">
	import '../app.css';
	import { pageIn } from '$lib/utils.svelte';
	import favicon from '$lib/assets/favicon.ico';
	import Pages from '$lib/components/Pages.svelte';
	import { page } from '$app/state';
	import NotFound from '$lib/components/NotFound.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NotFound>
	<div class="min-h-screen justify-center">
		<div class="mx-auto w-full max-w-4xl md:max-w-screen-xl px-6 py-10 flex flex-col md:flex-row gap-10 justify-center">
			{#key page.url.pathname}
				<div in:pageIn class="flex flex-col">
					{@render children()}
				</div>
			{/key}
			<Pages />
		</div>
	</div>
</NotFound>
