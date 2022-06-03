<script lang="ts">
  import { data } from "./data/appdata";
  import Section from "./Section.svelte";

  const sections = data.sections;
</script>

<div class="flex flex-col w-full">
  <Section sectionType={data.sections.header} />
</div>
