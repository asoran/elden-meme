<script lang="ts">
	export let word: string;
	export let maxLetters = 6;

	enum Type {
		OK,
		NOK,
		O,
	}

	function refresh(word) {
		return word.split('').map((l) => ({
			type: Math.random() > 0.3 ? Type.OK : Math.random() > 0.5 ? Type.NOK : Type.O,
			letter: l,
		}));
	}
	$: letters = refresh(word);

	let key: KeyboardEvent['key'];
	let keyCode;
	let code;
	function handleKeydown({ key, keyCode }: KeyboardEvent) {
		key = key;
		keyCode = keyCode;
	}
</script>

<div class="border grid grid-flow-col justify-start">
	{#each letters as letter}
		<div
			class:bg-green-600={letter.type === Type.OK}
			class:bg-yellow-600={letter.type === Type.O}
			class:bg-red-600={letter.type === Type.NOK}
			class="w-12 h-12 border flex justify-center items-center"
		>
			{letter.letter}
		</div>
	{/each}
</div>

<button on:click={() => (letters = refresh(word))} class="border h-16 w-32">Refresh</button>
