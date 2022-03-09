<script type="ts">
    export let title: string;
    export let bg: string;
    export let fg;
</script>

<div>{title}</div>

{#each fg as item}
    <div class="bg-{bg} fg-{item.color} border-dashed border border-slate-500">{item.see}</div>
{/each}

<style lang="postcss">
	div {
		@apply px-4 py-2 rounded-md text-center align-middle;
	}

	.bg-red {
		background-color: #ff0200;
	}

	.bg-orange {
		background-color: #ff6202;
	}

	.bg-yellow {
		background-color: #ff0;
	}

	.bg-green {
		background-color: #01ff06;
	}

	.bg-blue {
		background-color: #0401ff;
	}

    .bg-violet {
        background-color: #ff00fe;
    }

    .bg-black {
        background-color: #000;
    }

    .bg-white {
        background-color: #fff;
    }

    .bg-gray {
        background-color: #6b606e;
    }

	.fg-red {
		color: #ff0200;
	}

	.fg-orange {
		color: #ff6202;
	}

	.fg-yellow {
		color: #ff0;
	}

	.fg-green {
		color: #01ff06;
	}

	.fg-blue {
		color: #0401ff;
	}

    .fg-violet {
        color: #ff00fe;
    }

    .fg-black {
        color: #000;
    }

    .fg-white {
        color: #fff;
    }

    .fg-gray {
        color: #6b606e;
    }
</style>
