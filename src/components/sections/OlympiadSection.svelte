<script lang="ts">
import { slide } from "svelte/transition";
import ScrollReveal from "./ScrollReveal.svelte";

let { items = [], initialCount = 3 } = $props();
let expanded = $state(false);

const visibleItems = $derived(expanded ? items : items.slice(0, initialCount));
const hiddenCount = $derived(items.length - initialCount);
</script>

{#each visibleItems as teaching, index (teaching.company + teaching.startDate)}
  <ScrollReveal delay={100 + index * 100}>
    <div
      class="group mb-6 relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all duration-300 p-6"
      transition:slide={{ duration: 300, easing: (t) => t * (2 - t) }}
    >
      <div class="flex gap-4">
        {#if teaching.logo}
          <div class="shrink-0">
            <img src={teaching.logo} alt={teaching.company} class="w-14 h-14 rounded-lg object-cover border border-neutral-200 dark:border-neutral-700" loading="lazy" />
          </div>
        {/if}
        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap justify-between items-start mb-1.5">
            <h4 class="text-lg font-semibold dark:text-neutral-100 leading-tight">{teaching.role}</h4>
            <span class="text-sm text-neutral-400 shrink-0 ml-2">{teaching.startDate} &mdash; {teaching.endDate}</span>
          </div>
          <p class="text-[var(--primary)] font-medium text-sm mb-3">{teaching.company}, {teaching.location}</p>
        </div>
      </div>

      <details class="group/details mt-2 transition-all duration-300">
        <summary class="text-sm font-medium text-[var(--primary)] hover:underline cursor-pointer list-none flex items-center gap-2 select-none">
          <span class="w-6 h-6 rounded-full border border-neutral-300 dark:border-neutral-600 flex items-center justify-center group-hover/details:border-[var(--primary)] group-hover/details:bg-[var(--primary)]/10 transition-all duration-200" title="Toggle details">
            <svg class="w-3.5 h-3.5 transition-transform group-open/details:rotate-90 text-neutral-500 dark:text-neutral-400 group-hover/details:text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </summary>
        <div class="details-content mt-3 space-y-3">
          <p class="text-neutral-600 dark:text-neutral-300 leading-relaxed">{teaching.description}</p>
          <ul class="space-y-1.5">
            {#each teaching.highlights as highlight}
              <li class="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--primary)] shrink-0"></span>
                {highlight}
              </li>
            {/each}
          </ul>
        </div>
      </details>
    </div>
  </ScrollReveal>
{/each}

{#if items.length > initialCount}
  <div class="mt-4 flex justify-center">
    <button
      onclick={() => (expanded = !expanded)}
      class="w-9 h-9 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-all duration-200 cursor-pointer border border-neutral-200 dark:border-neutral-700"
      aria-label={expanded ? "Show less" : `Show ${hiddenCount} more`}
      title={expanded ? "Show less" : `Show ${hiddenCount} more`}
    >
      <svg class="w-4 h-4 transition-transform duration-300 {expanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>
{/if}
