<script lang="ts">
  let { text = "", maxLines = 2 } = $props();
  let expanded = $state(false);
</script>

<button
  onclick={() => (expanded = !expanded)}
  class="w-full text-left cursor-pointer"
  type="button"
>
  <p class="text-neutral-600 dark:text-neutral-300 leading-relaxed transition-all duration-300"
    class:line-clamp-2={!expanded}
    class:line-clamp-none={expanded}
  >
    {text}
  </p>
  <span class="text-xs font-medium text-[var(--primary)] hover:underline mt-1 inline-block">
    {expanded ? "Show less" : "Show more"}
  </span>
</button>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .line-clamp-none {
    display: block;
  }
</style>