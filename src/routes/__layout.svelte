<script context="module">
	export const preload = () => {};
</script>

<script lang="ts">
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	import { getStores, navigating, page, session, updated } from '$app/stores';
	import LogRocket from 'logrocket';
	import Bugsnag from '@bugsnag/js';

	export let year: number = new Date().getFullYear();
	let ga_measurment_id = 'UA-114644797-1';

	LogRocket.init('herbig-haro/portfolio');

	if (!Bugsnag._client) {
		Bugsnag.start({ apiKey: '615a4defdc1b405abb1743b6cb33843d', logger: null });
	}

	Bugsnag.beforeNotify = (data: { metaData: { sessionURL: string | null } }) => {
		data.metaData.sessionURL = LogRocket.sessionURL;
		return data;
	};
</script>

<Nav />

<section class="relative block hero-home" />

<main class="relative sasquatch">
	<div class="container mx-auto px-4 m-10 py-10">
		<div
			class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
		>
			<div class="px-6 py-6">
				<slot />
			</div>
		</div>
	</div>
</main>

<Footer {year} />

<svelte:head>
	<GoogleAnalytics properties={[ga_measurment_id]} />
</svelte:head>
