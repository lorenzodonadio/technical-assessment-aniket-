<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	//TODO complete this type definition
	import type { Person } from '$lib/types/personType';
	//TODO get data from endpoint
	export let data;
	//TODO Correctly type the incoming data with the Person type, if you did not manage that step just use any[] as type
</script>

<h1>Technical Assessment Deerns</h1>

<!-- TODO: Modify the Card component to display the data. hint:pass one object as a prop -->
<Card />
<!-- TODO: use an each block to display multiple cards -->
