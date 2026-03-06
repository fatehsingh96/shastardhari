import { defineCollection, z } from 'astro:content';

const items = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    origin: z.string(),
    period: z.string(),
    status: z.enum(['available', 'sold']),
    coverImage: z.string(),
    images: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

export const collections = { items };
