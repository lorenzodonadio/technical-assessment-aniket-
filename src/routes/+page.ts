/* TODO
    -modify this function to get this json data -> `https://api.npoint.io/7116b399239c3967fad5`
    -return it as data in place of the empty array */

export async function load() {
	let result = '';

	await fetch(`https://api.npoint.io/7116b399239c3967fad5`)
		.then((response) => response.json())
		.then((data) => (result = data));

	return { result };
}
