import type { Metadata, Site, PrivMessages, Socials, Repos, Cryptos, Donations } from "@/types";

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
  TITLE: "BrainByteZ - Tech Blog & Projects",
  DESCRIPTION: "Welcome to BrainByteZ - a personal blog featuring articles on software development, hardware hacking, gadgets, and open-source projects.",
};

export const BLOG: Metadata = {
  TITLE: "Blog - Tech Articles / Tutorials",
  DESCRIPTION: "Explore articles and tutorials on software development, hardware hacking, open-source tools, retro computing, and tech topics.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects - Open Source / Software",
  DESCRIPTION:
    "A collection of my projects with links to repositories, downloads, and documentation for open-source tools and applications.",
};

export const CONTACT: Metadata = {
  TITLE: "Contact BrainByteZ",
  DESCRIPTION:
    "Get in touch with BrainByteZ for questions, feedback, or just to say hello.",
};

export const SUPPORT: Metadata = {
  TITLE: "Support BrainByteZ",
  DESCRIPTION:
    "Support BrainByteZ through donations, Buy Me a Coffee, Ko-fi, or cryptocurrency to help keep the blog & projects alive.",
};

export const COPYRIGHT: Metadata = {
  TITLE: "Copyright & Legal",
  DESCRIPTION:
    "Copyright and legal information for BrainByteZ, including content usage rights and intellectual property notices.",
};

export const PRIVMESSAGES: PrivMessages = [
  {
    NAME: "Threema ID",
    ICON: "brand-threema",
    HREF: "https://threema.id/EZEX9RP9",
  },
];

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
    NAME: "Mastodon",
    ICON: "brand-mastodon",
    HREF: "https://mastodon.nl/@brainb0ne",
  },
  {
    NAME: "Threads",
    ICON: "brand-threads",
    HREF: "https://www.threads.com/@brainb0ne",
  },
  {
    NAME: "Telegram",
    ICON: "brand-telegram",
    HREF: "https://t.me/brainbytez",
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
