import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "BrainByteZ",
  DESCRIPTION: "Just Another Geek Site.",
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

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://x.com/brainb0ne",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/brainb0ne",
  },
  {
    NAME: "Codeberg",
    HREF: "https://codeberg.org/brainb0ne",
  },
];
