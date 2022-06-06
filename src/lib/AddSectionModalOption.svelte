<script lang="ts">
  import ChevronRight from "svelte-bootstrap-icons/lib/ChevronRight/ChevronRight.svelte";
  import { createEventDispatcher } from "svelte";

  export let option: string = "N/A";
  export let key: string;
  export let last: boolean = false;

  const dispatch = createEventDispatcher();

  const click = () => {
    dispatch("decision", { option: option, key: key });
  };
</script>

<button
  class="w-full p-4 text-lg flex items-center justify-between
       hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border-b
       border-slate-300 dark:border-slate-700"
  class:border-none={last}
  on:click={click}
  ><span>
    {option}
  </span>
  <ChevronRight class="w-5 h-5 text-slate-400" />
</button>
