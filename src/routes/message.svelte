<script lang="ts">
	import { browser } from '$app/env';
	import { base } from '$app/paths';
	import { categories, conjunctions, templates } from '$lib/message';
	import { onMount } from 'svelte';

	let theme: 'light' | 'dark' = 'light';
	onMount(() => {
		theme = localStorage.theme ?? 'light';
	});
	function switchTheme() {
		if (theme === 'light') {
			document.documentElement.classList.add('dark');
			theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			theme = 'light';
		}
	}

	const r = <T extends unknown>(words: T[]) => {
		return words[Math.floor(Math.random() * words.length)];
	};

	let line1T = r(templates);
	let line1W = r(r(Object.values(categories)));
	let conj = r(conjunctions);
	let withConj = true;
	let line2T = r(templates);
	let line2W = r(r(Object.values(categories)));
	let line2 = true;
</script>

<div class="w-full flex flex-col items-center">
	<p class="text-4xl">Elden Ring message creator online</p>
	<button on:click={switchTheme} class="border">{theme === 'light' ? '☽' : '☀'} Dog theme?</button>

	<div
		class={`container
    w-1/2 h-40 m-[40px]
    ${false ? 'bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600' : ''}
    border-y-white border-x-0 border-2
    text-white`}
	>
		<div class="icon flex justify-center items-end py-4">
			<img src="{base}/ring.jpg" alt="elden ring" />
		</div>
		<div class="message flex justify-start items-center px-4">
			{line1T.replace(/\*\*\*\*/gm, line1W)}
			<br />
			{line2 && withConj ? conj + ' ' : ''}{line2 ? line2T.replace(/\*\*\*\*/gm, line2W) : ''}
		</div>
		<div class="rated flex justify-start items-center px-4">Rated Good</div>
		<div class="appraise flex justify-center items-center px-4">Appraisals 9999</div>
		<div
			class="actions flex justify-center items-center border-t-white border-x-0 border-b-0 border-2 mx-4"
		>
			Close / Good / Poor
		</div>
	</div>

	<div class="text-white bg-gray-600">
		Line 1
		<select name="" id="" bind:value={line1T} class="bg-black">
			{#each templates as template}
				<option value={template}>{template}</option>
			{/each}
		</select>
		<select name="" id="" bind:value={line1W} class="bg-black">
			{#each Object.values(categories) as cats}
				{#each cats as cat}
					<option value={cat}>{cat}</option>
				{/each}
			{/each}
		</select>
		<br />
		Conjunction
		<select name="" id="" bind:value={conj} class="bg-black">
			{#each conjunctions as conjunction}
				<option value={conjunction}>{conjunction}</option>
			{/each}
		</select>
		<input type="checkbox" name="" id="" bind:checked={withConj} />
		<br />
		Line 2
		<select name="" id="" bind:value={line2T} class="bg-black">
			{#each templates as template}
				<option value={template}>{template}</option>
			{/each}
		</select>
		<select name="" id="" bind:value={line2W} class="bg-black">
			{#each Object.values(categories) as cats}
				{#each cats as cat}
					<option value={cat}>{cat}</option>
				{/each}
			{/each}
		</select>
		<input type="checkbox" name="" id="" bind:checked={line2} />
	</div>
</div>

<style>
	.container {
		/* background: rgb(255,255,255); */
		--from: rgba(75, 85, 99, 0.1);
		--to: #1f2937;
		background: linear-gradient(
			90deg,
			var(--from) 0%,
			var(--to) 4%,
			var(--to) 96%,
			var(--from) 100%
		);
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 0.5fr 0.5fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'icon message message message message'
			'icon message message message message'
			'icon rated . appraise appraise'
			'actions actions actions actions actions';
	}

	.actions {
		grid-area: actions;
	}

	.icon {
		grid-area: icon;
	}

	.message {
		grid-area: message;
	}

	.appraise {
		grid-area: appraise;
	}

	.rated {
		grid-area: rated;
	}
</style>
