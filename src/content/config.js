import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		url: z.string(),
		coverLink: z.string(),
		// official?: z.string(),
	}),
});
const restorationCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		link: z.string(),
		coverLink: z.string(),
		geoloc: z.string(),
	}),
});

const blogPosts = defineCollection({
	schema: z.object({
		title: z.string(),
		url: z.string(),
		coverLink: z.string(),
	}),
});

export const collections = {
	projects: projectCollection,
	restoration: restorationCollection,
	posts:blogPosts,
};
