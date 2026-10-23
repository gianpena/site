<script lang="ts">

    import github from '$lib/assets/github.svg';
    import linkedin from '$lib/assets/linkedin.svg';
    import anilist from '$lib/assets/anilist.svg';
    import git_branch from '$lib/assets/git-branch.svg';

    const externalResources = [
        { img: github, url: "https://github.com/gianpena", alt: "GitHub" },
        { img: linkedin, url: "https://www.linkedin.com/in/gian-pena", alt: "LinkedIn" },
        { img: anilist, url: "https://anilist.co/user/gian", alt: "AniList" }
    ];

    const pages = [
        { title: "Home", path: "/" },
        { title: "Speedtyping", path: "/speedtyping" },
        { title: "Competitive Programming", path: "/competitive-programming" },
        { title: "Résumé", path: "/resume" }
    ];

    let { hash }: { hash: string } = $props();

</script>

<nav class="md:w-48 shrink-0 text-[16pt] flex flex-col gap-4">
    <span>Pages</span>
    <div class="flex flex-col">
        {#each pages as page}
            <a href={page.path} class="hover:opacity-50 transition-opacity text-white no-underline">{page.title}</a>
        {/each}
    </div>
    <div class="flex flex-row gap-[20px]">
        {#each externalResources as resource}
            <a href={resource.url}>
                <img src={resource.img} alt={resource.alt} class="rounded-md w-6 h-6 hover:opacity-50 transition-opacity" />
            </a>
        {/each}
    </div>
    <a href="https://github.com/gianpena/site" class="mt-auto flex flex-row items-center gap-[10px] hover:opacity-50 transition-opacity font-mono text-sm">
        <img src={git_branch} alt="My website's GitHub page" class="w-3 h-3"/>
        <span>{hash}</span>
    </a>
</nav>