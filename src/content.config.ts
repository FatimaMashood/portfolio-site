import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    meta: z.string(),
    subtitle: z.string().optional(),
    category: z.enum(['research', 'design']).optional(),
    summary: z.string(),
    caption: z.string().optional(),
    role: z.string().optional(),
    collaborators: z.array(z.string()).optional(),
    team: z.array(z.string()).optional(),
    tools: z.string().optional(),
    group: z.string().optional(),
    images: z.array(z.string()),
    image_alt: z.array(z.string()).optional(),
    links: z.array(z.string()).optional(),
    publish: z.boolean(),
  }),
});

// Exhibition reviews, linked from the other page's exhibits set.
const exhibits = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/exhibits' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    venue: z.string(),
    caption: z.string(),
    summary: z.string(),
    cover: z.string(),
    cover_alt: z.string(),
    order: z.number(),
  }),
});

export const collections = { projects, exhibits };
