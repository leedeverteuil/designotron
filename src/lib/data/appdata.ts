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
  }
};

const data: AppData = {
  sections: {
    header: {
      displayName: "Header",
      options: [
        {
          src: "/img/header-1.png",
          author: "John Appleseed",
          href: "https://github.com"
        }
      ]
    }
  }
};

export { data };
export type { AppData, SectionType, SectionOption };
