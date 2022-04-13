<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	import posts from '$lib/data/feed.json';

	export function load() {
		const feed = Object.values(posts.items);
		const firstPost = feed.shift();
		const secondPost = feed.shift();
		const thirdPost = feed.shift();
		const fourthPost = feed.shift();

		return { props: { firstPost, secondPost, thirdPost, fourthPost, feed } };
	}
</script>

<script lang="ts">
	import { format } from 'date-fns';
	import ContentCard from './../../components/tails/content-card.svelte';
	import BlogPosts from './../../components/tails/blog-posts.svelte';

	export let firstPost: {
		id: string;
		image: string;
		title: string;
		content_text: string;
		content_html: string;
		date_published: string;
		tags: string[];
	};

	export let secondPost: {
		id: string;
		image: string;
		title: string;
		content_text: string;
		content_html: string;
		date_published: string;
		tags: string[];
	};

	export let thirdPost: {
		id: string;
		image: string;
		title: string;
		content_text: string;
		content_html: string;
		date_published: string;
		tags: string[];
	};

	export let fourthPost: {
		id: string;
		image: string;
		title: string;
		content_text: string;
		content_html: string;
		date_published: string;
		tags: string[];
	};

	export let feed: {
		id: string;
		image: string;
		title: string;
		content_text: string;
		content_html: string;
		date_published: string;
		tags: string[];
	}[];

	function trunc(text: string, max: number) {
		return text.substring(0, max - 1) + (text.length > max ? '&hellip;' : '');
	}
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section class="mb-10">
	<h1>Blog</h1>

	<ContentCard
		date={new Date(firstPost.date_published)}
		title={firstPost.title}
		href={`/blog/${firstPost.id}`}
	>
		{@html trunc(firstPost.content_text, 125)}
	</ContentCard>

	<BlogPosts {secondPost} {thirdPost} {fourthPost} />

	<div class="py-2 p-8">
		<ul>
			{#each feed as { id, title, date_published, content_text }}
				<li class="mb-12">
					<h2><a sveltekit:prefetch href={`/blog/${id}`}>{title}</a></h2>
					<div class="pb-4">
						<time>{format(new Date(date_published), 'PPP')}</time>
					</div>
					<div class="text-lg">
						{@html trunc(content_text, 125)}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style lang="postcss">
	h2 {
		padding: 0;
	}

	h2:hover {
		text-decoration: underline;
	}
</style>
