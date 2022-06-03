<script lang="ts">
  import { data } from "$lib/data/appdata";
  import { onMount } from "svelte";
  import ExclamationSquare from "svelte-bootstrap-icons/lib/ExclamationSquare/ExclamationSquare.svelte";

  export let sectionType: string;

  let sectionData: any;
  let imageFrame: HTMLDivElement;
  let currentIndex = 0;

  onMount(() => {

    // if (sectionType) {
    //   // @ts-ignore
    //   sectionData = data.sections[sectionType];
    //   let opt = sectionData && sectionData.options[currentIndex];
    //   console.log(imageFrame);
    //   if (opt) {
    //     imageFrame.style.backgroundImage = "url(" + opt.src + ")";
    //     console.log("dif");
    //   }
    // }
  });
</script>

<div>
  {#if sectionData}
    <div bind:this={imageFrame} class="flex w-full bg-cover h-auto">
      <!-- <img alt="A portion of a webpage" src={sectionData.options[0].src} /> -->
    </div>
  {:else}
    <p
      class="flex flex-col gap-2 items-center justify-center
      mt-4 p-4 rounded-lg text-slate-900 dark:text-slate-50"
    >
      <ExclamationSquare class="w-8 h-8 text-red-400" />
      Invalid section type!
    </p>
  {/if}
</div>
