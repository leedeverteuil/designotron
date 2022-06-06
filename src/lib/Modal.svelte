<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher();

  let background: HTMLElement;

  const click = (e: Event) => {
    if (e.target == background) {
      dispatch("backgroundclick");
    }
  };
</script>

<div
  class="fixed top-0 left-0 w-screen h-screen bg-slate-900/50 dark:bg-slate-900/80"
  transition:fade={{ duration: 120 }}
  on:click={click}>
  <div
    bind:this={background}
    class="flex w-full h-full items-center justify-center">
    <slot />
  </div>
</div>
