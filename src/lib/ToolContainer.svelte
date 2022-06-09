<script lang="ts">
  import Button from "./Button.svelte";
  import Plus from "svelte-bootstrap-icons/lib/Plus/Plus.svelte";
  import SectionLayout from "./SectionLayout.svelte";
  import AddSectionModal from "./AddSectionModal.svelte";

  let showAddModal: boolean = false;
  let layout: SectionLayout;

  const randomize = () => {
    layout.randomizeAllSections();
  };

  const importFunc = () => {
    // Import exported JSON section layout
  };

  const exportFunc = () => {
    // Export current section layout as JSON
  };

  const destroy = () => {
    layout.removeAllSections();
  };

  const openAddModal = () => {
    showAddModal = true;
  };

  const addDecision = (e: CustomEvent) => {
    if (e.detail && e.detail.key) {
      layout.addSection(e.detail.key);
    }

    closeAddModal();
  };

  const closeAddModal = () => {
    showAddModal = false;
  };
</script>

<div class="mt-8">
  <!-- Control buttons -->
  <div class="w-full grid grid-cols-4 gap-3 justify-items-stretch">
    <Button primary on:click={randomize}>Randomize</Button>
    <!-- <Button
      >Import
      <span class="text-sm bg-slate-300 dark:bg-slate-800 px-2 py-1 rounded-lg"
        >Todo</span
      ></Button>
    <Button
      >Export
      <span class="text-sm bg-slate-300 dark:bg-slate-800 px-2 py-1 rounded-lg"
        >Todo</span>
    </Button> -->
    <Button danger on:click={destroy}>Destroy</Button>
  </div>

  <!-- Section outer container -->
  <div class="mt-6 flex flex-col items-center justify-center">
    <!-- Section inner container -->
    <SectionLayout bind:this={layout} />

    <!-- Add button -->
    <button
      on:click={openAddModal}
      class="flex flex-col items-center justify-center p-4 pt-2 mt-4 gap-1
                   rounded-lg focus-outline transition-all
                   hover:-translate-y-1 focus:-translate-y-1">
      <Plus class="text-slate-400 dark:text-slate-600 w-12 h-12" />
      <span class="text-slate-900 dark:text-slate-100">Add Section</span>
    </button>
  </div>

  <!-- Add section modal -->
  {#if showAddModal}
    <AddSectionModal on:decision={addDecision} on:close={closeAddModal} />
  {/if}
</div>
