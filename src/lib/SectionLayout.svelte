<script lang="ts">
  import { data, type SectionType } from "./data/appdata";
  import Section from "./Section.svelte";
  import { flip } from "svelte/animate";

  const sectionData = data.sections;

  type SectionKey = "header";
  type SectionEntry = {
    id: number;
    key: string;
    data: SectionType;
    component?: Section;
  };

  let uid: number = 0;
  let sections: Array<SectionEntry> = [];

  export const addSection = (key: SectionKey) => {
    sections = [...sections, { id: uid++, key: key, data: sectionData[key] }];
  };

  export const removeAllSections = () => {
    sections = [];
  };

  export const randomizeAllSections = () => {
    sections.forEach((section) => {
      section.component?.randomize();
    });
  };

  const removeSection = (index: number) => {
    sections = sections.filter((_item, itemIndex) => index != itemIndex);
  };

  const moveSectionUp = (index: number) => {
    const copy = [...sections];
    const section = copy[index];
    copy.splice(index, 1);

    const newIndex = index - 1;
    if (newIndex < 0) {
      copy.push(section);
    } else {
      copy.splice(newIndex, 0, section);
    }

    sections = copy;
  };

  const moveSectionDown = (index: number) => {
    let copy = [...sections];
    const section = copy[index];
    copy.splice(index, 1);

    const newIndex = index + 1;
    if (newIndex >= sections.length) {
      copy = [section, ...copy];
    } else {
      copy.splice(newIndex, 0, section);
    }

    sections = copy;
  };
</script>

<div class="flex flex-col w-full">
  {#each sections as section, i (section.id)}
    <div animate:flip={{ duration: 400 }}>
      <Section
        data={section.data}
        on:remove={() => removeSection(i)}
        on:moveup={() => moveSectionUp(i)}
        on:movedown={() => moveSectionDown(i)}
        bind:this={section.component} />
    </div>
  {/each}
</div>
