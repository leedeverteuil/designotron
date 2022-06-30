import raw_data from "./data.json";

type SectionOption = {
  img: string,
  author: string,
  source: string
};

type SectionType = {
  displayName: string,
  options: Array<SectionOption>
};

type AppData = {
  sections: {
    header: SectionType,
    hero: SectionType,
    features: SectionType,
    cta: SectionType,
    pricing: SectionType,
    faq: SectionType,
    newsletter: SectionType,
    stats: SectionType,
    compare: SectionType,
    steps: SectionType,
    events: SectionType,
    testimonials: SectionType,
    blog: SectionType,
    contact: SectionType,
    team: SectionType,
    logoclouds: SectionType,
    pageheading: SectionType,
    content: SectionType,
    footer: SectionType,
  }
};

let data: AppData = {
  sections: {
    header: {
      displayName: "Header",
      options: [],
    },
    hero: {
      displayName: "Hero",
      options: [],
    },
    features: {
      displayName: "Features",
      options: [],
    },
    cta: {
      displayName: "Call to Action",
      options: [],
    },
    pricing: {
      displayName: "Pricing",
      options: [],
    },
    faq: {
      displayName: "FAQ",
      options: [],
    },
    newsletter: {
      displayName: "Newsletter",
      options: [],
    },
    stats: {
      displayName: "Stats",
      options: [],
    },
    compare: {
      displayName: "Compare",
      options: [],
    },
    steps: {
      displayName: "Steps",
      options: [],
    },
    events: {
      displayName: "Events",
      options: [],
    },
    testimonials: {
      displayName: "Testimonials",
      options: [],
    },
    blog: {
      displayName: "Blog",
      options: [],
    },
    contact: {
      displayName: "Contact",
      options: [],
    },
    team: {
      displayName: "Team",
      options: [],
    },
    logoclouds: {
      displayName: "Logo Clouds",
      options: [],
    },
    pageheading: {
      displayName: "Page Heading",
      options: [],
    },
    content: {
      displayName: "Content",
      options: [],
    },
    footer: {
      displayName: "Footer",
      options: [],
    },
  }
}

// Raw format is better at efficient storage, but
// we convert to more application friendly objects
// at runtime
raw_data.groups.forEach(g => {
  for (const img in g.screenshots) {
    // Data is stored in json like so:
    // "url": "sectionName"
    const sectName = g.screenshots[img as keyof typeof g.screenshots];
    const sect = data.sections[sectName as keyof typeof data.sections];
    const obj = {
      img: `img/${g.prefix}-${img}.webp`,
      author: g.author,
      source: g.source
    };

    sect.options.push(obj);
  }
});


export { data };
export type { AppData, SectionType, SectionOption };
