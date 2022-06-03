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
    on:click={toggle}
  >
    <ChevronDown
      class="text-slate-400 transition-transform {open ? 'rotate-180' : ''}"
    />
    The answers to your questions
  </button>

  <!-- Body content -->
  {#if open}
    <div
      class="px-4 pb-4 border-t border-slate-400 dark:border-slate-700"
      transition:slide={{ duration: 300 }}
    >
      <dl class="mt-4 faq">
        <dt class="italic">Why did you make this tool?</dt>
        <dd>
          Sometimes I feel overwhelmed by the early stages of the design process
          and wanted a tool that could nudge me in the right direction.
        </dd>
        <br />

        <dt class="italic">Where are the screenshots from?</dt>
        <dd>
          Most of them are found by browsing Pinterest and finding ones that I
          feel might fit this collection. <mark
            >These are not my designs and I do not take credit for them!</mark
          > I have taken care to include all the owners' names and links to the original
          work.
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

        <dt class="italic">
          What can I do with the compilation I've put together?
        </dt>
        <dd>
          My intention is for the compilations made here to be used purely as an
          inspirational starting point. The designs shown here are not meant to
          be copied pixel for pixel, but rather as a tool to kickstart one's own
          creative work.
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
