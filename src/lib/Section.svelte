<script lang="ts">
  import { browser } from "$app/env";
  import { slide } from "svelte/transition";
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import type { SectionOption, SectionType } from "$lib/data/appdata";
  import Button from "./Button.svelte";
  import Trash from "svelte-bootstrap-icons/lib/Trash/Trash.svelte";
  import ArrowLeft from "svelte-bootstrap-icons/lib/ArrowLeft/ArrowLeft.svelte";
  import ArrowRight from "svelte-bootstrap-icons/lib/ArrowRight/ArrowRight.svelte";
  import ArrowUp from "svelte-bootstrap-icons/lib/ArrowUp/ArrowUp.svelte";
  import ArrowDown from "svelte-bootstrap-icons/lib/ArrowDown/ArrowDown.svelte";

  export let data: SectionType;

  const dispatch = createEventDispatcher();
  const options = data.options;
  const lastIndex = options.length - 1;

  let containerElement: HTMLElement;
  let imageElement: HTMLElement;
  let selected: boolean = false;
  let currentIndex: number = 0;
  let sectionOpt: SectionOption;

  const updateOpt = () => {
    sectionOpt = options[currentIndex];
  };

  updateOpt();

  const click = (e: Event) => {
    selected = !selected;
  };

  const previous = (e: Event) => {
    e.stopPropagation();
    if (currentIndex == 0) {
      currentIndex = lastIndex;
    } else {
      currentIndex -= 1;
    }
    updateOpt();
  };

  const next = (e: Event) => {
    e.stopPropagation();
    if (currentIndex == lastIndex) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    updateOpt();
  };

  const moveUp = (e: Event) => {
    e.stopPropagation();
    dispatch("moveup");
  };

  const moveDown = (e: Event) => {
    e.stopPropagation();
    dispatch("movedown");
  };

  const remove = () => {
    dispatch("remove");
  };

  const onDocumentClick = (e: Event) => {
    if (e.target != containerElement && e.target != imageElement && selected) {
      selected = false;
    }
  };

  export const randomize = () => {
    currentIndex = Math.floor(Math.random() * options.length);
    updateOpt();
  };

  onMount(() => {
    document.addEventListener("click", onDocumentClick);
    randomize();
  });

  onDestroy(() => {
    if (browser) {
      document.removeEventListener("click", onDocumentClick);
    }
  });
</script>

<button bind:this={containerElement} class="block" on:click={click}>
  <img
    bind:this={imageElement}
    class="transition-all border-slate-400 dark:border-slate-700 select-none"
    class:selected
    src={sectionOpt.src}
    alt="A screenshot of a portion of a webpage." />

  <!-- Selection control buttons -->
  {#if selected}
    <div
      transition:slide|local={{ duration: 250 }}
      class="px-4 py-4 w-full flex flex-col gap-3 items-center justify-center">
      <a
        class="block text-slate-500 dark:text-slate-600 hover:text-blue-500 hover:underline"
        href={sectionOpt.href}>&copy; {sectionOpt.author}</a>
      <div class="flex gap-3 items-center justify-center">
        <!-- Previous option -->
        <Button on:click={previous}>
          <ArrowLeft class="" />
        </Button>

        <!-- Next option -->
        <Button on:click={next}>
          <ArrowRight class="" />
        </Button>

        <!-- Move up -->
        <Button on:click={moveUp}>
          <ArrowUp class="" />
        </Button>

        <!-- Move Down -->
        <Button on:click={moveDown}>
          <ArrowDown class="" />
        </Button>

        <!-- Delete section -->
        <Button danger on:click={remove}>
          <Trash />
        </Button>
      </div>
    </div>
  {/if}
</button>

<style lang="postcss">
  .selected {
    @apply scale-105 rounded-lg border;
  }
</style>
