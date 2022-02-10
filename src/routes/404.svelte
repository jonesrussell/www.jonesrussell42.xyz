<script lang="ts">
	import ErrorPage from './__error.svelte';
</script>

<ErrorPage status={404} error={{ name: 'Error', message: 'Not found' }} />
