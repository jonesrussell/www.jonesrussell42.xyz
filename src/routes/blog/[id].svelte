<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	import { items as feed } from '$lib/data/feed.json';

	export function load({ params }): { props: { post } } {
		const id: string = params.id;
		const posts = Object.values(feed);

		let post = posts.filter((obj) => obj.id === id)[0];

		const blogUrl = 'blog.jonesrussell42.xyz';
		if (!post.image.includes(blogUrl)) {
			post.image = `${blogUrl}${post.image}`;
		}

		post.content_html = post?.content_html.replace(
			/src\s*=\s*"(.+?)"/gi,
			`src="https://${blogUrl}/$1"`
		);

		return { props: { post } };
	}
</script>

<script lang="ts">
	export let post: {
		id: string;
		image: string;
		title: string;
		summary: string;
		content_text: string;
		content_html: any;
		url: string;
		tags: string[];
		date_published: string;
		date_modified: string;
		author: string;
	};
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<nav class="bg-grey-light p-5 rounded font-sans w-full m-4">
	<ol class="list-reset flex text-grey-dark">
		<li><a href="/" class="text-blue font-bold">Home</a></li>
		<li><span class="mx-2">/</span></li>
		<li><a href="/blog" class="text-blue font-bold">Blog</a></li>
		<li><span class="mx-2">/</span></li>
		<li>{post.title}</li>
	</ol>
</nav>

<h1>{post.title}</h1>

<article class="content px-8">
	{@html post.content_html}
</article>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,700&display=swap');

	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	h1 {
		font-family: 'Open Sans';
		font-size: 2.5em;
		font-weight: 700;
		font-style: italic;
	}

	:global(h2) {
		@apply px-0 !important;
	}

	:global(p, blockquote) {
		@apply py-4 !important;
	}

	article {
		@apply text-xl;
	}
</style>
