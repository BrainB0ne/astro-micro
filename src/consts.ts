import type { Metadata, Site, Socials, Repos, Cryptos } from "@types";

export const SITE: Site = {
  TITLE: "BrainByteZ",
  DESCRIPTION: "Just Another Geek Site.",
  EMAIL: "webmaster@brainbytez.eu",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Just Another Geek Site.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and downloads.",
};

export const CONTACT: Metadata = {
  TITLE: "Contact",
  DESCRIPTION:
    "Contact me.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    EMOJI: "💬",
    HREF: "https://x.com/brainb0ne",
  },
];

export const REPOS: Repos = [
  {
    NAME: "GitHub",
    EMOJI: "🖥️",
    HREF: "https://github.com/brainb0ne",
  },
  {
    NAME: "Codeberg",
    EMOJI: "🖥️",
    HREF: "https://codeberg.org/brainb0ne",
  },
];

export const CRYPTOS: Cryptos = [
  {
    TYPE: "Bitcoin",
    ICON: "currency-bitcoin",
    ADDRESS: "1AAUMQx3U19rYsThxpZTgxvGmQ6UYaEcdy",
  },
  {
    TYPE: "Litecoin",
    ICON: "currency-litecoin",
    ADDRESS: "LanDLwJxvLPeHhdExdpSTHSe9shw7XWvLB",
  },
];
