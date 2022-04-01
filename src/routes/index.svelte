<script lang="ts">
	import type { Key } from '$lib/keyboard';

	import Keyboard from '$lib/Keyboard.svelte';
	import Word from '../lib/word.svelte';
	import Message from './message.svelte';

	type T = '😂' | '😆';
	const laugh: T = '😂';
	let l: T = '😆';
	laugh.toString();
	const obj = {
		id: 'mdr',
		laugh,
	};
	let inner = true;

	let word = '';
	function kbKeyPressed({ detail: key }: CustomEvent<Key>) {
		console.log(key);
		switch (key) {
			case 'backspace': {
				word = word.slice(0, -1);
				break;
			}
			case 'enter': {
				break;
			}
			default: {
				word += key;
			}
		}
	}
</script>

<Message />

<!-- <h1>Yo</h1>

<div class="bg-slate-500 w-64 h-64 border rounded-sm text-center">
	I'm {laugh}
	{l}ing xd

	<div class:bg-red-900={inner}>RED</div>
</div>

<Word word="testing" />
<Word word="MDR" />
<Word word="lakitu" />
<Word {word} />

<div class="w-96 h-64">
	<Keyboard on:kbKeyPressed={kbKeyPressed} />
</div>

<style lang="postcss">
	div {
	}
</style> -->
