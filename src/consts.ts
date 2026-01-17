import type { Metadata, Site, Socials, Repos, Cryptos, Donations } from "@types";

export const SITE: Site = {
  TITLE: "BrainByteZ",
  DESCRIPTION: "Just Another Geek Site.",
  EMAIL: "contact@brainbytez.eu",
  RSS: "rss.xml",
  COPYRIGHT_YEAR_FIRSTPUB: 2012,
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

export const SUPPORT: Metadata = {
  TITLE: "Support",
  DESCRIPTION:
    "Support me.",
};

export const COPYRIGHT: Metadata = {
  TITLE: "Copyright",
  DESCRIPTION:
    "Copyright information.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X / Twitter",
    ICON: "brand-x",
    HREF: "https://x.com/brainb0ne",
  },
  {
    NAME: "Bluesky",
    ICON: "brand-bluesky",
    HREF: "https://bsky.app/profile/brainb0ne.bsky.social",
  },
  {
    NAME: "Instagram",
    ICON: "brand-instagram",
    HREF: "https://www.instagram.com/brainb0ne",
  },
];

export const REPOS: Repos = [
  {
    NAME: "GitHub",
    ICON: "github",
    HREF: "https://github.com/brainb0ne",
  },
  {
    NAME: "Codeberg",
    ICON: "codeberg",
    HREF: "https://codeberg.org/brainb0ne",
  },
];

export const DONATIONS: Donations = [
  {
    NAME: "Buy Me a Coffee",
    ICON: "bmc-logo",
    HREF: "https://buymeacoffee.com/brainbytez",
  },
  {
    NAME: "Ko-fi",
    ICON: "kofi",
    HREF: "https://ko-fi.com/brainbytez",
  },
];

export const CRYPTOS: Cryptos = [
  {
    ID: "bitcoin",
    TYPE: "Bitcoin",
    ICON: "currency-bitcoin",
    ADDRESS: "bc1q9zm3f7eq5czccjaz3nz4mp72np7cxxkvkf8vhg",
  },
  {
    ID: "litecoin",
    TYPE: "Litecoin",
    ICON: "currency-litecoin",
    ADDRESS: "Ldraeacsn4j5St9VpVTAbUfBAVTcZ6gAdX",
  },
  {
    ID: "ethereum",
    TYPE: "Ethereum",
    ICON: "currency-ethereum",
    ADDRESS: "0x0C9d56844bAd8c89F4dEd725bcE6263A8f5f9B42",
  },
  {
    ID: "digibyte",
    TYPE: "Digibyte",
    ICON: "currency-digibyte",
    ADDRESS: "D6ZWxrNfDrfZg61XcW6AtC9NXVKnuuViXM",
  },
  {
    ID: "stellar",
    TYPE: "Stellar",
    ICON: "currency-stellar",
    ADDRESS: "GANGHPDVAAN5M3T6WSCAT43TDXUUZKE6FXJSFGYX4LWRDCVXNCIOBHVS",
  },
];
