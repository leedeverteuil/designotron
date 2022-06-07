<script lang="ts">
  import Github from "svelte-bootstrap-icons/lib/Github/Github.svelte";
  import ExclamationSquare from "svelte-bootstrap-icons/lib/ExclamationSquare/ExclamationSquare.svelte";
  import DarkModeToggle from "$lib/DarkModeToggle.svelte";
  import FaqAccordion from "$lib/FaqAccordion.svelte";
  import ToolContainer from "$lib/ToolContainer.svelte";
</script>

<header class="max-w-4xl mx-auto mt-16 px-5 text-slate-900 dark:text-slate-100">
  <div class="flex gap-3 items-center justify-end text-slate-400">
    <!-- Link to project repo -->
    <a
      href="https://github.com/leedeverteuil/designotron"
      class="rounded-sm p-1 focus-outline"
    >
      <Github class="w-6 h-6 hover:text-slate-900 dark:hover:text-slate-100" />
    </a>

    <!-- Light/dark mode toggle -->
    <DarkModeToggle />
  </div>

  <h1 class="text-5xl font-bold">Designotron</h1>
  <h2 class="mt-4 text-xl">
    A tool for getting web design inspiration quickly.
  </h2>

  <!-- Copyright warning -->
  <p class="flex items-center justify-left gap-3 mt-6">
    <ExclamationSquare class="text-slate-400 w-6 h-6" />
    For inspiration and personal use only. All designs belong to their respective
    owners.
  </p>

  <FaqAccordion />

  <ToolContainer />
</header>
