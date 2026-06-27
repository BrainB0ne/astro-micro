import { defineCollection } from "astro:content";  // Remove z for Astro 6
import { glob, file } from 'astro/loaders';
import { z } from "astro/zod";  // Needed for Astro 6

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    time: z.string().regex(/^\d{2}:\d{2}(:\d{2})?$/).optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const links = defineCollection({
  loader: file("src/data/links.json"),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    url: z.string(),
  }),
});

const skills = defineCollection({
  loader: file("src/data/skills.json"),
  schema: z.object({
    id: z.number(),
    name: z.string(),
  }),
});

export const collections = { blog, projects, links, skills };
