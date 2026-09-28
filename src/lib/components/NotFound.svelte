<script lang="ts">
    import { page } from "$app/state";
    const { children } = $props();

</script>

{#if page.status === 404}
    <div class="font-mono flex flex-col text-xl h-svh w-full items-center justify-center">
        <span>404</span>
        <span>This page doesn't exist.</span>
    </div>
{:else}
    {@render children()}
{/if}