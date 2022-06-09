<script lang="ts">
  import { onMount } from "svelte";

  import Lightbulb from "svelte-bootstrap-icons/lib/Lightbulb/Lightbulb.svelte";
  import LightbulbOff from "svelte-bootstrap-icons/lib/LightbulbOff/LightbulbOff.svelte";

  const STORAGE_KEY = "darkModeSet";
  let darkMode = false;

  let root: HTMLElement;

  const prefersDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initMode = () => {
    const darkModeSet = localStorage.getItem(STORAGE_KEY);

    // Found previous setting
    if (darkModeSet != undefined) {
      darkMode = darkModeSet == "true";
    }
    // No previous setting found, use preference from window
    else {
      darkMode = prefersDark();
    }

    applyMode();
  };

  const toggleMode = () => {
    // Invert the current mode
    darkMode = !darkMode;

    // Update local storage for when page reloads
    localStorage.setItem(STORAGE_KEY, darkMode ? "true" : "false");

    applyMode();
  };

  const applyMode = () => {
    // Apply class to root <html> element
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  onMount(() => {
    root = document.documentElement;
    initMode();
  });
</script>

<button
  on:click={toggleMode}
  class="p-1 hover:text-slate-900 dark:hover:text-slate-100
         rounded-sm focus-outline"
>
  {#if darkMode}
    <LightbulbOff class="w-6 h-6" />
  {:else}
    <Lightbulb class="w-6 h-6" />
  {/if}
</button>
