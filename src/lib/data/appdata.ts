type SectionOption = {
  src: string,
  author: string,
  href: string
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

const data: AppData = {
  sections: {
    header: {
      displayName: "Header",
      options: [
        {
          src: "/img/header-1.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
    hero: {
      displayName: "Hero",
      options: [
        {
          src: "/img/hero-1.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
    features: {
      displayName: "Features",
      options: [
        {
          src: "/img/features-1.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
        {
          src: "/img/features-2.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
    cta: {
      displayName: "Call-To-Action",
      options: [
        {
          src: "/img/cta-1.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
    pricing: {
      displayName: "Pricing",
      options: [
        {
          src: "/img/pricing-1.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
    faq: {
      displayName: "FAQ",
      options: [
        {
          src: "/img/faq-1.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
    newsletter: {
      displayName: "Newsletter",
      options: []
    },
    stats: {
      displayName: "Stats",
      options: []
    },
    compare: {
      displayName: "Compare",
      options: [
        {
          src: "/img/compare-1.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
    steps: {
      displayName: "Steps",
      options: []
    },
    events: {
      displayName: "Events",
      options: []
    },
    testimonials: {
      displayName: "Testimonials",
      options: []
    },
    blog: {
      displayName: "Blog",
      options: []
    },
    contact: {
      displayName: "Contact",
      options: []
    },
    team: {
      displayName: "Team",
      options: [
        {
          src: "/img/team-1.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
    logoclouds: {
      displayName: "Logo Clouds",
      options: [
        {
          src: "/img/logo-cloud-1.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },

      ]
    },
    pageheading: {
      displayName: "Page Heading",
      options: [
        {
          src: "/img/page-heading-1.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
    content: {
      displayName: "Content",
      options: [
        {
          src: "/img/content-1.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
    footer: {
      displayName: "Footer",
      options: [
        {
          src: "/img/footer-1.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
  }
};

export { data };
export type { AppData, SectionType, SectionOption };
