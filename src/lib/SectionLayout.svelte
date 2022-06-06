<script lang="ts">
  import { data, type SectionType } from "./data/appdata";
  import Section from "./Section.svelte";

  const sectionData = data.sections;

  type SectionKey = "header";
  type SectionEntry = {
    id: number;
    key: string;
    data: SectionType;
  };

  let uid: number = 0;
  let sections: Array<SectionEntry> = [];

  export const addSection = (key: SectionKey) => {
    sections = [...sections, { id: uid++, key: key, data: sectionData[key] }];
  };

  export const removeAllSections = () => {
    sections = [];
  };

  const removeSection = (index: number) => {
    sections.splice(index, 1);
    sections = sections;
  };
</script>

<div class="flex flex-col w-full">
  {#each sections as section, i}
    <Section data={section.data} on:remove={() => removeSection(i)} />
  {/each}
</div>
