<script lang="ts">
  import { onMount } from "svelte";

  export let delay = 0;
  export let once = true;

  let element: HTMLElement;
  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            if (once) {
              observer.unobserve(element);
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  });
</script>

<div bind:this={element} class="scroll-reveal" class:isVisible style="animation-delay: {delay}ms">
  <slot />
</div>

<style>
  .scroll-reveal {
    opacity: 0;
    transform: translateY(2rem);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .scroll-reveal.isVisible {
    opacity: 1;
    transform: translateY(0);
  }
</style>
