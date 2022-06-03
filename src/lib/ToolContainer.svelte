<script lang="ts">
  import Button from "./Button.svelte";
  import Plus from "svelte-bootstrap-icons/lib/Plus/Plus.svelte";
  import SectionLayout from "./SectionLayout.svelte";

  const randomize = () => {
    // Randomize existing sections
  };

  const importFunc = () => {
    // Import exported JSON section layout
  };

  const exportFunc = () => {
    // Export current section layout as JSON
  };

  const destroy = () => {
    // Remove all sections from layout
  };

  const add = () => {
    // Add new section
  };
</script>

<div class="mt-8">
  <!-- Control buttons -->
  <div class="w-full grid grid-cols-4 gap-3 justify-items-stretch">
    <Button primary>Randomize</Button>
    <Button>Import</Button>
    <Button>Export</Button>
    <Button danger>Destroy</Button>
  </div>

  <!-- Section outer container -->
  <div
    class="mt-6 flex flex-col items-center justify-center"
  >
    <!-- Section inner container -->
    <SectionLayout />

    <!-- Add button -->
    <button
      on:click={add}
      class="flex flex-col items-center justify-center p-4 pt-2 mt-4 gap-1
                   rounded-lg focus-outline transition-all
                   hover:-translate-y-1 focus:-translate-y-1"
    >
      <Plus class="text-slate-400 dark:text-slate-600 w-12 h-12" />
      <span class="text-slate-900 dark:text-slate-100">Add Section</span>
    </button>
  </div>
</div>
