<script lang="ts">
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import type { SectionOption, SectionType } from "$lib/data/appdata";
  import Button from "./Button.svelte";
  import Arrow90degUp from "svelte-bootstrap-icons/lib/Arrow90degUp/Arrow90degUp.svelte";
  import Trash from "svelte-bootstrap-icons/lib/Trash/Trash.svelte";
  import ArrowLeft from "svelte-bootstrap-icons/lib/ArrowLeft/ArrowLeft.svelte";
  import ArrowRight from "svelte-bootstrap-icons/lib/ArrowRight/ArrowRight.svelte";

  export let sectionType: SectionType;

  const dispatch = createEventDispatcher();
  const options = sectionType.options;
  const lastIndex = options.length - 1;

  let selected: boolean = false;
  let currentIndex: number = 0;
  let sectionOpt: SectionOption;

  const updateOpt = () => {
    sectionOpt = options[currentIndex];
  };

  updateOpt();

  const click = () => {
    selected = !selected;
  };

  const previous = (e: Event) => {
    e.stopPropagation();
    if (currentIndex == 0) {
      currentIndex = lastIndex;
    }
    updateOpt();
  };

  const next = (e: Event) => {
    e.stopPropagation();
    if (currentIndex == lastIndex) {
      currentIndex = 0;
    }
    updateOpt();
  };

  const remove = () => {
    dispatch("remove");
  };
</script>

<button class="block" on:click={click}>
  <img
    class="transition-all border-slate-400 dark:border-slate-700"
    class:selected
    src={sectionOpt.src}
    alt="A screenshot of a portion of a webpage."
  />

  <!-- Selection control buttons -->
  {#if selected}
      <div
        transition:slide={{ duration: 250 }}
        class="px-4 py-4 w-full flex gap-3 items-center justify-center"
      >
        <Button on:click={previous}>
          <ArrowLeft class="" />
        </Button>
        <Button on:click={next}>
          <ArrowRight class="" />
        </Button>
        <Button danger on:click={remove}>
          <Trash />
        </Button>
      </div>
  {/if}
</button>

<style lang="postcss">
  .selected {
    @apply scale-105 rounded-lg border;
  }
</style>
