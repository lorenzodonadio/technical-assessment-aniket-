<script lang="ts">
	import type { Person } from '$lib/types/personType';
	export let person: Person;
</script>

<div id="card" class="mx-2 my-2 flex-initial w-128">
	<div class="container drop-shadow-xl rounded bg-white px-5 py-5">
		{#if person.avatar}
			<img class="border-current" src={person.avatar} alt="Avatar" style="width:200px" />
		{/if}
		<div><span> ID : </span> <span> {person.id} </span></div>
		<div>
			<span> Name : </span> <span> {person.first_name} </span> <span> {person.last_name} </span>
		</div>
		<div><span> Email : </span> <span> {person.email} </span></div>
		{#if person.country}
			<div><span> Country : </span> <span> {person.country} </span></div>
		{/if}
		<div>
			<span> Created : </span> <span> {new Date(person.created_at).toLocaleDateString()} </span>
		</div>
		<div><span> IP : </span> <span> {person.ip_address} </span></div>
	</div>
</div>

<style>
</style>
