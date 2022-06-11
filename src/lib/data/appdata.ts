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
        {
          src: "/img/hotel-swan/header.webp",
          author: "Outcrowd",
          href: "https://dribbble.com/shots/17630655-Hotel-Swan-Web-Design-for-Hotel"
        },
        {
          src: "/img/attio/header.webp",
          author: "Attio",
          href: "https://attio.com/?utm_source=dribbble&utm_medium=social_post&utm_campaign=attio&utm_content=shot18"
        },
        {
          src: "/img/evervault/header.webp",
          author: "Evervault",
          href: "https://evervault.com/"
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
        {
          src: "/img/hotel-swan/hero.webp",
          author: "Outcrowd",
          href: "https://dribbble.com/shots/17630655-Hotel-Swan-Web-Design-for-Hotel"
        },
        {
          src: "/img/bento-matte/hero.webp",
          author: "UI8",
          href: "https://dribbble.com/shots/15565313-Bento-Matte-Mobile-App"
        },
        {
          src: "/img/attio/hero.webp",
          author: "Attio",
          href: "https://attio.com/?utm_source=dribbble&utm_medium=social_post&utm_campaign=attio&utm_content=shot18"
        },
        {
          src: "/img/evervault/hero.webp",
          author: "Evervault",
          href: "https://evervault.com/"
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
        {
          src: "/img/attio/features.webp",
          author: "Attio",
          href: "https://attio.com/?utm_source=dribbble&utm_medium=social_post&utm_campaign=attio&utm_content=shot18"
        },
        {
          src: "/img/attio/features-2.webp",
          author: "Attio",
          href: "https://attio.com/?utm_source=dribbble&utm_medium=social_post&utm_campaign=attio&utm_content=shot18"
        },
        {
          src: "/img/evervault/features.webp",
          author: "Evervault",
          href: "https://evervault.com/"
        },
        {
          src: "/img/evervault/features-2.webp",
          author: "Evervault",
          href: "https://evervault.com/"
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
        {
          src: "/img/attio/cta.webp",
          author: "Attio",
          href: "https://attio.com/?utm_source=dribbble&utm_medium=social_post&utm_campaign=attio&utm_content=shot18"
        },
        {
          src: "/img/attio/cta-2.webp",
          author: "Attio",
          href: "https://attio.com/?utm_source=dribbble&utm_medium=social_post&utm_campaign=attio&utm_content=shot18"
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
        {
          src: "/img/attio/testimonials.webp",
          author: "Attio",
          href: "https://attio.com/?utm_source=dribbble&utm_medium=social_post&utm_campaign=attio&utm_content=shot18"
        },
        {
          src: "/img/evervault/testimonials.webp",
          author: "Evervault",
          href: "https://evervault.com/"
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
        {
          src: "/img/attio/logo-cloud.webp",
          author: "Attio",
          href: "https://attio.com/?utm_source=dribbble&utm_medium=social_post&utm_campaign=attio&utm_content=shot18"
        },
        {
          src: "/img/evervault/logo-cloud.webp",
          author: "Evervault",
          href: "https://evervault.com/"
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
        {
          src: "/img/attio/footer.webp",
          author: "Attio",
          href: "https://attio.com/?utm_source=dribbble&utm_medium=social_post&utm_campaign=attio&utm_content=shot18"
        },
        {
          src: "/img/evervault/footer.webp",
          author: "Evervault",
          href: "https://evervault.com/"
        },
      ]
    },
  }
};

export { data };
export type { AppData, SectionType, SectionOption };
