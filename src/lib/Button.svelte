<script lang="ts">
  export let primary = false;
  export let danger = false;
</script>

<button on:click
  class="flex flex-row items-center justify-center gap-3 focus-outline rounded-lg px-5 py-3 border border-slate-400 text-slate-900
                 dark:border-slate-700 dark:text-slate-50 hover:-translate-y-1 focus:-translate-y-1
                 transition-transform
                 {primary && 'bg-blue-500 text-blue-50 border-0'}
                 {danger &&
    'text-red-600 border-red-500 dark:text-red-400 dark:border-red-400 focus-outline-danger'}"
>
  <slot />
</button>
