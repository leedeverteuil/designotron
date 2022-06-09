<script lang="ts">
  import ChevronDown from "svelte-bootstrap-icons/lib/ChevronDown/ChevronDown.svelte";
  import { slide } from "svelte/transition";

  let open = false;

  const toggle = () => {
    open = !open;
  };
</script>

<div class="mt-6 border border-slate-400 dark:border-slate-700 rounded-lg">
  <!-- Header content -->
  <button
    class="w-full flex flex-row gap-3 items-center justify-left cursor-pointer
           p-4 rounded-lg focus-outline"
    on:click={toggle}>
    <ChevronDown
      class="text-slate-400 transition-transform {open ? 'rotate-180' : ''}" />
    The answers to your questions
  </button>

  <!-- Body content -->
  {#if open}
    <div
      class="px-4 pb-4 border-t border-slate-400 dark:border-slate-700"
      transition:slide={{ duration: 300 }}>
      <dl class="mt-4 faq">
        <dt class="italic">Why did you make this tool?</dt>
        <dd>
          Increase profit/enjoyment by reducing time and energy spent
          conceptualizing page layouts.
        </dd>
        <br />

        <dt class="italic">How frequently will content be added?</dt>
        <dd>
          My goal is to break down at least one website per day and dump the
          screenshots here. Over time this will add up to a substantial
          collection.
        </dd>
        <br />

        <dt class="italic">Where are the screenshots from?</dt>
        <dd>
          I browse the web and break down pages that fit the collection. <mark
            >These are not my designs and I do not take credit for them!</mark>
          All the owners' names and links to the original work are included.
        </dd>
        <br />

        <dt class="italic">
          My design is featured here and I would like it removed.
        </dt>
        <dd>
          Please contact me at deverti@proton.me and I will remove it as soon as
          possible. I apologize for the inconvenience.
        </dd>
        <br />

        <dt class="italic">What can I do with the layout I've put together?</dt>
        <dd>
          Use it as a jumping-off point for your own creative work. This tool
          makes it easier to imagine the final product of a page by breaking
          design choices down into small chunks.
        </dd>
      </dl>
    </div>
  {/if}
</div>

<style lang="postcss">
  .faq {
    @apply leading-8;
  }

  .faq dt {
    @apply italic;
  }

  .faq dt::before {
    content: "Q: ";
  }

  .faq dd {
  }

  .faq dd::before {
    content: "A: ";
  }
  mark {
    @apply bg-yellow-300 p-1.5 rounded-sm text-slate-900;
  }
</style>
