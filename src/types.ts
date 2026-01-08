export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  URL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  ICON: string;
  HREF: string;
}[];

export type Repos = {
  NAME: string;
  ICON: string;
  HREF: string;
}[];

export type Donations = {
  NAME: string;
  ICON: string;
  HREF: string;
}[];

export type Cryptos = {
  TYPE: string;
  ICON: string;
  ADDRESS: string;
}[];
