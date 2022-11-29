<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	//TODO complete this type definition
	import type { PersonObject } from '$lib/types/personType';
	//TODO get data from endpoint
	export let data: PersonObject;
	//TODO Correctly type the incoming data with the Person type, if you did not manage that step just use any[] as type
</script>

<h1>Technical Assessment Deerns</h1>

<!-- TODO: Modify the Card component to display the data. hint:pass one object as a prop -->
<div class="flex flex-wrap">
	{#each data.result as person}
		<Card {person} />
	{/each}
</div>

<!-- TODO: use an each block to display multiple cards -->
