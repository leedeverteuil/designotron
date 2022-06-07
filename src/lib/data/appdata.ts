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
          src: "/img/lb/header-lb.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
        {
          src: "/img/sb/header-sb.webp",
          author: "Sparkbox",
          href: "https://sparkbox.com/"
        },
      ]
    },
    hero: {
      displayName: "Hero",
      options: [
        {
          src: "/img/lb/hero-lb.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
        {
          src: "/img/sb/hero-sb.webp",
          author: "Sparkbox",
          href: "https://sparkbox.com/"
        },
      ]
    },
    features: {
      displayName: "Features",
      options: [
        {
          src: "/img/lb/features-lb-1.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
        {
          src: "/img/lb/features-lb-2.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
        {
          src: "/img/sb/features-sb-1.webp",
          author: "Sparkbox",
          href: "https://sparkbox.com/"
        },
        {
          src: "/img/sb/features-sb-2.webp",
          author: "Sparkbox",
          href: "https://sparkbox.com/"
        },
      ]
    },
    cta: {
      displayName: "Call-To-Action",
      options: [
        {
          src: "/img/lb/cta-lb.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
    pricing: {
      displayName: "Pricing",
      options: [
        {
          src: "/img/lb/pricing-lb.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
    faq: {
      displayName: "FAQ",
      options: [
        {
          src: "/img/lb/faq-lb.webp",
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
          src: "/img/lb/compare-lb.webp",
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
      options: [
        {
          src: "/img/sb/testimonials-sb-1.webp",
          author: "Sparkbox",
          href: "https://sparkbox.com/"
        },
        {
          src: "/img/sb/testimonials-sb-2.webp",
          author: "Sparkbox",
          href: "https://sparkbox.com/"
        },
      ]
    },
    blog: {
      displayName: "Blog",
      options: [
        {
          src: "/img/sb/blog-sb.webp",
          author: "Sparkbox",
          href: "https://sparkbox.com/"
        },
      ]
    },
    contact: {
      displayName: "Contact",
      options: []
    },
    team: {
      displayName: "Team",
      options: [
        {
          src: "/img/lb/team-lb.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
        {
          src: "/img/sb/team-sb.webp",
          author: "Sparkbox",
          href: "https://sparkbox.com/"
        },
      ]
    },
    logoclouds: {
      displayName: "Logo Clouds",
      options: [
        {
          src: "/img/lb/logo-cloud-lb.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },

      ]
    },
    pageheading: {
      displayName: "Page Heading",
      options: [
        {
          src: "/img/lb/page-heading-lb.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
        {
          src: "/img/sb/page-heading-sb.webp",
          author: "Sparkbox",
          href: "https://sparkbox.com/"
        },
      ]
    },
    content: {
      displayName: "Content",
      options: [
        {
          src: "/img/lb/content-lb.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
      ]
    },
    footer: {
      displayName: "Footer",
      options: [
        {
          src: "/img/lb/footer-lb.webp",
          author: "Lookback",
          href: "https://www.lookback.com/"
        },
        {
          src: "/img/sb/footer-sb.webp",
          author: "Sparkbox",
          href: "https://sparkbox.com/"
        },
      ]
    },
  }
};

export { data };
export type { AppData, SectionType, SectionOption };
