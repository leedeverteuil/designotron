<script lang="ts">
  import Modal from "./Modal.svelte";
  import XCircle from "svelte-bootstrap-icons/lib/XCircle/XCircle.svelte";
  import AddSectionModalOption from "./AddSectionModalOption.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const close = () => {
    dispatch("close");
  };
</script>

<Modal on:backgroundclick={close}>
  <div
    class="mx-auto w-80 max-w-md rounded-lg bg-slate-100 dark:bg-slate-800 shadow-lg overflow-clip">
    <header
      class="flex items-center justify-between gap-2 border-b border-slate-300 dark:border-slate-700 px-4 py-4">
      <!-- Modal title -->
      <p>Add section</p>

      <!-- Close button -->
      <button
        on:click={close}
        class="text-red-500 transition-transform hover:scale-110 focus:scale-110 active:scale-125">
        <XCircle class="w-6 h-6" />
      </button>
    </header>
    <div>
      <AddSectionModalOption option="Header" on:decision />
      <AddSectionModalOption option="Hero" on:decision />
      <AddSectionModalOption option="Features" on:decision />
      <AddSectionModalOption option="Blog" on:decision />
      <AddSectionModalOption option="Footer" on:decision />
    </div>
  </div>
</Modal>
