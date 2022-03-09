<script type="ts">
    import ColourGridRow from '../components/ColourGridRow.svelte';

    const good = 'Good';
    const poor = 'Poor';

    let bgRedFg = [
        { color: 'red', see: poor },
        { color: 'orange', see: poor },
        { color: 'yellow', see: poor },
        { color: 'green', see: poor },
        { color: 'blue', see: poor },
        { color: 'violet', see: poor },
        { color: 'black', see: good },
        { color: 'white', see: good },
        { color: 'gray', see: poor }
    ];

    let bgOrangeFg = [
        { color: 'red', see: poor },
        { color: 'orange', see: poor },
        { color: 'yellow', see: poor },
        { color: 'green', see: poor },
        { color: 'blue', see: poor },
        { color: 'violet', see: poor },
        { color: 'black', see: good },
        { color: 'white', see: good },
        { color: 'gray', see: poor }
    ];

    let bgYellowFg = [
        { color: 'red', see: good },
        { color: 'orange', see: good },
        { color: 'yellow', see: poor },
        { color: 'green', see: poor },
        { color: 'blue', see: good },
        { color: 'violet', see: good },
        { color: 'black', see: good },
        { color: 'white', see: good },
        { color: 'gray', see: good }
    ];

    let bgGreenFg = [
        { color: 'red', see: poor },
        { color: 'orange', see: poor },
        { color: 'yellow', see: poor },
        { color: 'green', see: poor },
        { color: 'blue', see: good },
        { color: 'violet', see: poor },
        { color: 'black', see: good },
        { color: 'white', see: poor },
        { color: 'gray', see: good }
    ];

    let bgBlueFg = [
        { color: 'red', see: poor },
        { color: 'orange', see: poor },
        { color: 'yellow', see: good },
        { color: 'green', see: good },
        { color: 'blue', see: poor },
        { color: 'violet', see: poor },
        { color: 'black', see: poor },
        { color: 'white', see: good },
        { color: 'gray', see: poor }
    ];

    let bgVioletFg = [
        { color: 'red', see: poor },
        { color: 'orange', see: poor },
        { color: 'yellow', see: good },
        { color: 'green', see: good },
        { color: 'blue', see: poor },
        { color: 'violet', see: poor },
        { color: 'black', see: good },
        { color: 'white', see: good },
        { color: 'gray', see: poor }
    ];

    let bgBlackFg = [
        { color: 'red', see: poor },
        { color: 'orange', see: poor },
        { color: 'yellow', see: good },
        { color: 'green', see: good },
        { color: 'blue', see: poor },
        { color: 'violet', see: good },
        { color: 'black', see: poor },
        { color: 'white', see: good },
        { color: 'gray', see: poor }
    ];

    let bgWhiteFg = [
        { color: 'red', see: poor },
        { color: 'orange', see: poor },
        { color: 'yellow', see: good },
        { color: 'green', see: good },
        { color: 'blue', see: poor },
        { color: 'violet', see: good },
        { color: 'black', see: good },
        { color: 'white', see: poor },
        { color: 'gray', see: good }
    ];

    let bgGrayFg = [
        { color: 'red', see: poor },
        { color: 'orange', see: poor },
        { color: 'yellow', see: good },
        { color: 'green', see: good },
        { color: 'blue', see: poor },
        { color: 'violet', see: poor },
        { color: 'black', see: poor },
        { color: 'white', see: good },
        { color: 'gray', see: poor }
    ];
</script>

<div class="grid grid-rows-10 grid-flow-col gap-3">
	<div />
	<div>Red</div>
	<div>Orange</div>
	<div>Yellow</div>
	<div>Green</div>
	<div>Blue</div>
    <div>Violet</div>
    <div>Black</div>
    <div>White</div>
    <div>Gray</div>

    <ColourGridRow title="Red (#FF0200)" bg="red" fg="{bgRedFg}" />
    <ColourGridRow title="Orange (#FF6202)" bg="orange" fg="{bgOrangeFg}" />
    <ColourGridRow title="Yellow (#FFFF00)" bg="yellow" fg="{bgYellowFg}" />
    <ColourGridRow title="Green (#00FF00)" bg="green" fg="{bgGreenFg}" />
    <ColourGridRow title="Blue (#0000FF)" bg="blue" fg="{bgBlueFg}" />
    <ColourGridRow title="Violet (#FF00FE)" bg="violet" fg="{bgVioletFg}" />
    <ColourGridRow title="Black (#000000)" bg="black" fg="{bgBlackFg}" />
    <ColourGridRow title="White (#FFFFFF)" bg="white" fg="{bgWhiteFg}" />
    <ColourGridRow title="Gray (#6B606E)" bg="gray" fg="{bgGrayFg}" />

</div>

<style lang="postcss">
	.grid > div {
		@apply px-4 py-4 rounded-md;
	}
</style>
