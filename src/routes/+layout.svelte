<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import Pages from '$lib/components/Pages.svelte';
	import NotFound from '$lib/components/NotFound.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NotFound>
	<div class="min-h-screen justify-center">
		<div class="mx-auto w-full max-w-4xl md:max-w-screen-xl px-6 py-10 flex flex-col md:flex-row gap-10 justify-center">
			{@render children()}
			<Pages />
		</div>
	</div>
</NotFound>
