import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    date: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { articles, works };
