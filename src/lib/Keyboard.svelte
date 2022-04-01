<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { disposition, keys, type Key } from './keyboard';

	const dispatch = createEventDispatcher<{ kbKeyPressed: Key }>();
	let clicking = [];
	let lastPressed: Key | null = null;

	function keyPressed(key: Key) {
		dispatch('kbKeyPressed', key);
	}

	function isStringKey(key: string): key is Key {
		// needed to tell typescript Key extends string ...
		return keys.includes(key as Key);
	}

	function handleKeydown(event: KeyboardEvent) {
		// console.log(event);
		const key = event.key.toLowerCase();
		if (isStringKey(key)) {
			lastPressed = key;
			dispatch('kbKeyPressed', key);
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="grid grid-cols-10 grid-rows-3 border-4 justify-items-stretch gap-x-2 gap-y-4">
	{#each disposition as keyColumn}
		{#each keyColumn as key}
			<div
				class:col-span-2={key === 'enter' || key === 'backspace'}
				class:animate-spin={clicking[key]}
				on:mouseenter={() => (clicking[key] = true)}
				on:mouseleave={() => (clicking[key] = false)}
				on:click={(e) => keyPressed(key)}
				class:bg-red-500={lastPressed === key}
				class="flex justify-center items-center border h-16 hover:border-4"
			>
				{key}
			</div>
		{/each}
	{/each}
</div>

<style lang="postcss">
</style>
