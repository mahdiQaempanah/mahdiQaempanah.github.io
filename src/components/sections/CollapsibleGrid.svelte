<script lang="ts">
  let { items = [], initialCount = 4 } = $props();
  let expanded = $state(false);

  const visibleItems = $derived(
    expanded ? items : items.slice(0, initialCount),
  );
  const hiddenCount = $derived(items.length - initialCount);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
  {#each visibleItems as item, i}
    <div
      class="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <p class="font-semibold dark:text-neutral-100">{item.course}</p>
      <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
        {item.instructor} — {item.term}
      </p>
    </div>
  {/each}
</div>

{#if items.length > initialCount}
  <div class="mt-4 text-center">
    <button
      onclick={() => (expanded = !expanded)}
      class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors cursor-pointer"
    >
      {expanded ? "Show Less" : `Show ${hiddenCount} More`}
      <svg
        class="w-4 h-4 transition-transform {expanded ? 'rotate-180' : ''}"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>
{/if}
