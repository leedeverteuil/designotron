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
          author: "Plainthing Studio",
          href: "https://dribbble.com/shots/16939529-VRmedicine-Learning-Human-Anatomy-Website"
        },
        {
          src: "/img/header-2.png",
          author: "Genesis Block",
          href: "https://www.genesisblockchain.io/"
        },
        {
          src: "/img/header-3.png",
          author: "DStudio",
          href: "https://dribbble.com/shots/15469417-Dark-Landing-UI"
        }
      ]
    }
  }
};

export { data };
export type { AppData, SectionType, SectionOption };
