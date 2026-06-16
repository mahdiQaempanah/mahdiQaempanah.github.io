<script lang="ts">
import { slide } from "svelte/transition";

let { items = [], initialCount = 4, type = "ta" } = $props();
let expanded = $state(false);

const visibleItems = $derived(expanded ? items : items.slice(0, initialCount));
const hiddenCount = $derived(items.length - initialCount);
</script>

{#if type === "projects"}
  {#each visibleItems as project, i (project.title)}
    <div
      class="group mb-8 relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all duration-300"
      transition:slide={{ duration: 350, easing: (t) => t * (2 - t) }}
    >
      {#if project.image}
        <div class="relative h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <img src={project.image} alt="" class="absolute inset-0 w-full h-full object-cover blur-xl opacity-60 scale-110" aria-hidden="true" loading="lazy" />
          <img src={project.image} alt={project.title} class="relative w-full h-full object-contain p-3 z-10 group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
      {/if}
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-3 dark:text-neutral-100 leading-snug">{project.title}</h3>

        {#if project.tech && project.tech.length > 0}
          <div class="flex flex-wrap gap-1.5 mb-4">
            {#each project.tech as tech}
              <span class="px-2.5 py-0.5 border border-neutral-300 dark:border-neutral-600 text-neutral-500 dark:text-neutral-400 rounded-full text-xs font-medium">
                {tech}
              </span>
            {/each}
          </div>
        {:else}
          <div class="mb-4"></div>
        {/if}
        <div class="flex flex-wrap items-center gap-2">
          <details class="group/details transition-all duration-300">
            <summary class="text-sm font-medium text-[var(--primary)] hover:underline cursor-pointer list-none flex items-center gap-2 select-none">
              <span class="w-6 h-6 rounded-full border border-neutral-300 dark:border-neutral-600 flex items-center justify-center group-hover/details:border-[var(--primary)] group-hover/details:bg-[var(--primary)]/10 transition-all duration-200" title="Toggle description">
                <svg class="w-3.5 h-3.5 transition-transform group-open/details:rotate-90 text-neutral-500 dark:text-neutral-400 group-hover/details:text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </summary>
            <div class="details-content mb-3">
              <p class="text-neutral-600 dark:text-neutral-300 leading-relaxed">{project.description}</p>
            </div>
          </details>
          {#if project.links?.github}
            <a href={project.links.github} target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-200">
              GitHub
            </a>
          {/if}
          {#if project.links?.live}
            <a href={project.links.live} target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-200">
              Live Demo
            </a>
          {/if}
          {#if project.links?.docs}
            <a href={project.links.docs} target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-200">
              Documentation
            </a>
          {/if}
        </div>
      </div>
    </div>
  {/each}
{:else}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    {#each visibleItems as item, i (i)}
      <div
        class="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all duration-300"
        transition:slide={{ duration: 300, easing: (t) => t * (2 - t) }}
      >
        <p class="font-semibold dark:text-neutral-100">{item.course}</p>
        <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          {item.instructor} — {item.term}
        </p>
      </div>
    {/each}
  </div>
{/if}

{#if items.length > initialCount}
  <div class="mt-4 flex justify-center">
    <button
      onclick={() => (expanded = !expanded)}
      class="w-9 h-9 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-all duration-200 cursor-pointer border border-neutral-200 dark:border-neutral-700"
      aria-label={expanded ? "Show less" : `Show ${hiddenCount} more`}
      title={expanded ? "Show less" : `Show ${hiddenCount} more`}
    >
      <svg
        class="w-4 h-4 transition-transform duration-300 {expanded ? 'rotate-180' : ''}"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>
{/if}
