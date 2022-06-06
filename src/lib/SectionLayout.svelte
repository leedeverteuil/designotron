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
    // sectionList.push({
    //   id: uid++,
    //   key: key,
    //   data: sections[key],
    // });

    sections = [...sections, { id: uid++, key: key, data: sectionData[key] }];
  };

  export const removeAllSections = () => {
    sections = [];
  };
</script>

<div class="flex flex-col w-full">
  {#each sections as section}
    <Section data={section.data} />
  {/each}
</div>
