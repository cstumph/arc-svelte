<script>
	import MousePos from './components/mouse-position.svelte';
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<MousePos/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		height: 100%;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
			width: 100%;
		}
	}
</style>