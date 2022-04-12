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

	const client_id = '85998b3cf1274fa6a83d572a3450de12';
	// let player: Spotify.SpotifyPlayer; // Reference to our player.

	// // This is called when the player is ready to use.
	// function onReady(player: Spotify.SpotifyPlayer) {
	// 	console.log("The player is ready!");

	// 	// The player can now be used.
	// 	player.addListener("player_state_changed", state => {
	// 		console.log(state);
	// 	});

	// 	// Play a track using our new player!
	// 	player.play({
	// 		uris: ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh"],
	// 	});
	// }

	import AutoComplete from 'simple-svelte-autocomplete';
	import { onMount } from 'svelte';

	const musics = [];
	const urls = [
		{
			name: 'Kaguya',
			url: 'https://p.scdn.co/mp3-preview/ae956d6025a370f8d1d384030cf7b83c2f8bd676',
		},
		{
			name: 'Bleach OP 15',
			url: 'https://p.scdn.co/mp3-preview/cd8695aab0b56966e575f2e1b7a9fead8dd2de2c',
		},
		{
			name: 'Your name',
			url: 'https://p.scdn.co/mp3-preview/147ac547ea07111f5cbf8bb7fc93eb27a7aa5a37',
		},
		{
			name: 'FMAB OP1',
			url: 'https://p.scdn.co/mp3-preview/7d52ffca366b3fddc439340517440045078a77a4',
		},
		{
			name: 'One piece OP1',
			url: 'https://p.scdn.co/mp3-preview/4e31f25eb31cc6f87b01a3d8c1a06a3fbf72c691',
		},
		{
			name: 'FMAB OP3',
			url: 'https://p.scdn.co/mp3-preview/2f4d455f8c2584a8d3444a3b7c6db48ed79aa0ac',
		},
		{
			name: 'Demon Slayer',
			url: 'https://p.scdn.co/mp3-preview/b6e694611812e39da658f4ebfff7d149c942ca4b',
		},
		{
			name: 'KONOSUBA 2',
			url: 'https://p.scdn.co/mp3-preview/b35e7f21bd11fc7fe48ac8c243022815389ff534',
		},
		{
			name: 'Kaguya 2',
			url: 'https://p.scdn.co/mp3-preview/1e2c3e320015dbf5739155375c1100c5c7cf5b8c',
		},
		{
			name: 'JJK Op1',
			url: 'https://p.scdn.co/mp3-preview/43df439cf7512946fbb8a0ae71a323ee0cc45066',
		},
		{
			name: 'MHA 4',
			url: 'https://p.scdn.co/mp3-preview/7096a3b84433cbdc18a73f3e7b4c33ce81e90c09',
		},
		{
			name: 'SHIPUDEN OP5',
			url: 'https://p.scdn.co/mp3-preview/e69809fb15771f93381b3937f0648088a4c99778',
		},
		{
			name: 'FMAB 5',
			url: 'https://p.scdn.co/mp3-preview/c6d236210416398279bdf053d3378eccc2c27bf8',
		},
		{
			name: 'GOLDEN WIN OP1',
			url: 'https://p.scdn.co/mp3-preview/a78c6dd46766bc090ca707dfec27d956f8d51e6b',
		},
		{
			name: 'FMAB OP2',
			url: 'https://p.scdn.co/mp3-preview/e36a76933634f4e56a7b73788b8b758f0da6ce1b',
		},
		{
			name: 'VIOLET EVERGARDEN',
			url: 'https://p.scdn.co/mp3-preview/ec4ff82cfdb85e4adf078424414f8125568c6326',
		},
		{
			name: 'KONOSUBA',
			url: 'https://p.scdn.co/mp3-preview/fa9f6894ab4644ff9297c90a4a08337fe5d92a4c',
		},
		{
			name: 'KILL LA KILL',
			url: 'https://p.scdn.co/mp3-preview/0c7041af539815941d4fc46a2f214612a0914ca0',
		},
		{
			name: 'FMAB OP4',
			url: 'https://p.scdn.co/mp3-preview/73ffd1f95c49876375687e2b29551ca6f9d383de',
		},
		{
			name: 'SHIPUUDEN OP4',
			url: 'https://p.scdn.co/mp3-preview/40712f062a9ff2e49322d881a33f8bfd467f268f',
		},
		{
			name: 'OPM',
			url: 'https://p.scdn.co/mp3-preview/d85c1c91e769adcd5fd585e7bba39fdca76fabcd',
		},
		{
			name: 'JUJUTSU OP2',
			url: 'https://p.scdn.co/mp3-preview/dbd91fde9ed0273f216463625646ad3f9e7e0396',
		},
		{
			name: 'EVANGELION',
			url: 'https://p.scdn.co/mp3-preview/efa1b8da59e4192ee3f5a1abf3a291e6f4e0d844',
		},
		{
			name: 'KOBAYASHI',
			url: 'https://p.scdn.co/mp3-preview/bf02343659dfe72609389d6b5c82d6dfce7aa308',
		},
		{
			name: 'ONE PIECE OP5',
			url: 'https://p.scdn.co/mp3-preview/890bb1eafab4f00b7bf7bb5d4443d29709772203',
		},
		{
			name: 'ERASED',
			url: 'https://p.scdn.co/mp3-preview/7141e1b10cee6b464da13d8e2cc77e25f3da9b1a',
		},
		{
			name: 'VINLAND SAGA',
			url: 'https://p.scdn.co/mp3-preview/8fda27e313212e09b509ac3e6077ae5c4966533e',
		},
		{
			name: 'HXH',
			url: 'https://p.scdn.co/mp3-preview/d85df3b28855945fec223b1d3fd9773e9a93b9b6',
		},
		{
			name: 'SNK 2',
			url: 'https://p.scdn.co/mp3-preview/ee3dd72dd1c1d29f66b50772bbcf9ce173e860f7',
		},
		{
			name: 'ONE PIECE OP3',
			url: 'https://p.scdn.co/mp3-preview/f5f8c9dbb47ffbc5f12bb949293c3767f5c0a46e',
		},
		{
			name: 'HAMEFURA (OTOME GAME)',
			url: 'https://p.scdn.co/mp3-preview/d50a1bba62f2505b1725c3a5549ea311ccc6b483',
		},
		{
			name: 'ONE PIECE OP11',
			url: 'https://p.scdn.co/mp3-preview/2cfecb00b6af9bc4d0fa45fad5f4bcb88ef258a1',
		},
		{
			name: 'DR STONE',
			url: 'https://p.scdn.co/mp3-preview/ae09e5a719e4d07d7caf29e57185fde333748bdd',
		},
		{
			name: 'SHIPUUDEN OP2',
			url: 'https://p.scdn.co/mp3-preview/73a250c76cfc85dbee3da1f3a843f508e841abd4',
		},
		{
			name: 'BNHA 2 OP2',
			url: 'https://p.scdn.co/mp3-preview/031c9a7ca3b826d4c828897b89518bbb2ce40e4e',
		},
		{
			name: 'FMA OP1',
			url: 'https://p.scdn.co/mp3-preview/18027b98fe4e9f14945d395173d5b9ef02f6954d',
		},
		{
			name: 'ONE PIECE OP2',
			url: 'https://p.scdn.co/mp3-preview/3f7612ac8ca7e32b903e5f6ad198f5fe6295ff63',
		},
		{
			name: 'Bakemonogatari OP4',
			url: 'https://p.scdn.co/mp3-preview/b83c6cd610bf9fed2f9d9f8fabf0bd9bada0888a?cid=8ea41de8518143f1857d437b32885843',
		},
		{
			name: 'NORAGAMI',
			url: 'https://p.scdn.co/mp3-preview/858da44e0fac6343a414fec6040022ce59abfd17?cid=8ea41de8518143f1857d437b32885843',
		},
		{
			name: 'Dr. Stone: Stone Ward',
			url: 'https://p.scdn.co/mp3-preview/e60115e06437734c26f6ec1bb4e2267edf5fe051?cid=8ea41de8518143f1857d437b32885843',
		},
		{
			name: 'KILL LA KILL OP2',
			url: 'https://p.scdn.co/mp3-preview/8f62b0a203e7ba52336510387256824e84492970?cid=8ea41de8518143f1857d437b32885843',
		},
	];
	const chosenUrl = urls[Math.floor(Math.random() * urls.length)];
	const choices = [''];

	let player: Omit<HTMLAudioElement, keyof HTMLElement>;
	const { name, url } = chosenUrl;
	let startFrom = 0;
	let stopAt = 0;
	const MAX_TRY = 6;
	const TOTAL = 1 + 1 + 2 + 3 + 4 + 5;
	let actualTry = 0;
	let volume = 0.1;
	let cur = 0;

	function ok() {
		// console.log('newPlayer', player);
		if (player) {
			const { duration } = player;
			player.volume = volume;
			const r = Math.floor(Math.random() * (duration - TOTAL));
			startFrom = r;
			stopAt = r + 1;

			player.currentTime = startFrom;
		}
	}

	let isPlaying = false;
	function playing() {
		// console.log('playing');
		const { currentTime } = player;
		cur = currentTime;
		if (currentTime > stopAt) {
			reset();
		}
	}

	function skip(uchoice?: string) {
		if (actualTry < MAX_TRY) {
			answers[actualTry] = uchoice ?? '<skiped>';
			stopAt += actualTry + 1;
			choice = null;
			++actualTry;
			if(actualTry === MAX_TRY) {
				startFrom = 0;
				stopAt = 30;
				player.currentTime = startFrom;
			}
		}
	}

	function play() {
		isPlaying = true;
		player.play();
	}

	function pause() {
		isPlaying = false;
		player.pause();
	}

	function reset() {
		pause();
		player.currentTime = startFrom;
	}

	function changeVolume() {
		player.volume = volume;
	}

	function submit() {
		if (choice) {
			if (choice.name === name) {
				answers[actualTry] = choice.name;
				actualTry = MAX_TRY;
				startFrom = 0;
				stopAt = 30;
				player.currentTime = startFrom;
			} else {
				skip(choice.name);
			}
		}
	}

	let choice: typeof urls[number] = null;
	let answers: string[] = [];

	let theme: 'light' | 'dark' = 'light';
	let girl = false;
	onMount(() => {
		theme = localStorage.theme ?? 'dark';
		localStorage.setItem('theme', theme);
		girl = localStorage.girl === 'true';
		localStorage.setItem('girl', girl + '');
	});
	function switchTheme() {
		if (theme === 'light') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			theme = 'light';
		}
	}
	function switchGirl() {
		girl = !girl;
		localStorage.setItem('girl', girl + '');
	}
</script>

<svelte:head>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="" />
	<meta property="og:description" content="Rofl" />
	<meta property="og:title" content="Anime heardle" />
	<meta property="og:image" content="https://www.mangasfan.fr/hebergeur/uploads/1593203347.jpeg" />
	<meta property="twitter:description" content="Rofl" />
	<meta property="twitter:title" content="Anime heardle" />
	<meta
		property="twitter:image"
		content="https://www.mangasfan.fr/hebergeur/uploads/1593203347.jpeg"
	/>
	<meta name="theme-color" content="#FF0000" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<!-- <Message /> -->

<!-- <WebPlayback {client_id} scopes={[]} bind:this={wrapper}>
	<div slot="login">
		<button on:click={() => wrapper.login()}>Login with Spotify</button>
	</div>
	<div slot="player" let:player let:state />
</WebPlayback> -->

<audio bind:this={player} on:loadeddata={ok} on:timeupdate={playing} controls={false} src={url} />
<main
	class="bg-girl overflow-hidden flex flex-col py-4 px-8 dark:text-white border-yellow-300 border-8 h-screen justify-between"
	class:bg-none={!girl}
>
	<div
		id="header"
		class="max-w-screen-sm w-full mx-auto border flex items-center justify-between px-8"
	>
		<div on:click={switchTheme}>
			{#if theme === 'dark'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="stroke-black dark:stroke-white w-6 h-6 fill-transparent stroke-2 inline"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle cx="12" cy="12" r="5" />
					<path
						d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="stroke-black dark:stroke-white w-6 h-6 fill-transparent stroke-2 inline"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			{/if}
		</div>
		<h1 class="text-4xl">Anime Opening Heardle</h1>
		<div on:click={switchGirl}>
			{#if girl}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="stroke-black dark:stroke-white w-6 h-6 fill-transparent stroke-2 inline"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
					<circle cx="12" cy="12" r="3" />
					<line x1="0" y1="24" x2="24" y2="0" stroke="#000" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="stroke-black dark:stroke-white w-6 h-6 fill-transparent stroke-2 inline"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
					<circle cx="12" cy="12" r="3" />
				</svg>
			{/if}
		</div>
	</div>
	<div id="answers" class="max-w-screen-sm w-full mx-auto flex flex-col">
		{#each { length: MAX_TRY } as _, i}
			<div class="w-full border mx-auto p-2 m-2">
				{#if answers[i]}
					{answers[i]}
				{:else}...{/if}
			</div>
		{/each}
	</div>
	<div id="answer" class="max-w-screen-sm w-full mx-auto border">
		{#if actualTry < MAX_TRY}
			<!-- <input class="border-4" type="text" name="" id="" bind:value={choice} placeholder="Choice" /> -->
			<AutoComplete
				placeholder="Input name here"
				className="dark:text-black w-full -mb-2"
				maxItemsToShowInList={5}
				hideArrow={true}
				items={urls}
				bind:selectedItem={choice}
				labelFieldName="name"
				valueFieldName="id"
				keywordsFunction={(url) => url.name}
			>
				<!-- <div slot="item" let:item="{item}" let:label="{label}">
				{@html label}
			</div> -->
			</AutoComplete>
		{:else if choice && choice.name === name}
			<div class="bg-green-500 p-4 text-center">
				<h1 class="text-white">You win!</h1>
			</div>
		{:else}
			<div class="bg-red-500 p-4 text-center">
				<h1 class="text-white">You lose! It was: {name}</h1>
			</div>
		{/if}
	</div>

	<div
		id="buttons"
		class="max-w-screen-sm w-full mx-auto border flex justify-between items-center px-8 py-2"
	>
		{#if actualTry <= MAX_TRY - 2}
			<button
				type="button"
				class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 "
				on:click={() => skip()}
			>
				SKIP +{actualTry + 1}s
			</button>
		{:else}
			<button
				type="button"
				class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 "
				on:click={() => skip()}
			>
				SKIP
			</button>
		{/if}
		<div>
			<input
				on:input={changeVolume}
				type="range"
				id="cowbell"
				name="cowbell"
				min="0"
				max="1"
				bind:value={volume}
				step="0.01"
			/>
			<label for="cowbell">
				<svg
					class="inline"
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ffffff"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path
						d="M15.54 8.46a5 5 0 0 1 0 7.07"
					/></svg
				>
				{Math.floor(volume * 100)}%
			</label>
		</div>
		<button
			type="button"
			on:click={submit}
			class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 "
		>
			Validate
		</button>
	</div>
	<div
		id="play"
		class="max-w-screen-sm w-full mx-auto border flex justify-between items-center px-8 py-2"
	>
		<div>
			0:{Math.floor(cur - startFrom)
				.toString()
				.padStart(2, '0')}
		</div>
		<div>
			{#if !isPlaying}
				<button
					on:click={play}
					type="button"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="60"
						height="30"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#ffffff"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg
					>
				</button>
			{:else}
				<button
					on:click={pause}
					type="button"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="60"
						height="30"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#ffffff"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						><rect x="6" y="4" width="4" height="16" /><rect
							x="14"
							y="4"
							width="4"
							height="16"
						/></svg
					>
				</button>
			{/if}
		</div>
		<div>0:{TOTAL.toString().padStart(2, '0')}</div>
	</div>
	<div id="time" class="max-w-screen-sm w-full mx-auto border">
		<div class="flex-col">
			<div class="h-6 w-full relative overflow-hidden">
				<div
					class="h-full absolute bg-slate-800 overflow-hidden"
					style={`width: ${((stopAt - startFrom) / 30) * 100}%;`}
				>
					<div
						class="h-full absolute bg-red-800"
						style={`width: ${((cur - startFrom) / (stopAt - startFrom)) * 100}%;`}
					/>
				</div>
				<!-- <div class="w-full h-full absolute">
				<div class="bg-orange-200 w-px h-full absolute right-0" />
				<div class="w-px h-full absolute bg-yellow-800" style="left: 6.25%;" />
				<div class="w-px h-full absolute bg-yellow-800" style="left: 12.5%;" />
				<div class="w-px h-full absolute bg-yellow-800" style="left: 25%;" />
				<div class="w-px h-full absolute bg-yellow-800" style="left: 43.75%;" />
				<div class="w-px h-full absolute bg-yellow-800" style="left: 68.75%;" />
				<div class="w-px h-full absolute bg-yellow-800" style="left: 100%;" />
				<div class="bg-cyan-800 w-px h-full absolute right-0" />
			</div> -->
			</div>
		</div>
	</div>
</main>

<!-- <div class="">
	<div>Unlocked from {startFrom}s to {stopAt}s</div>
	<div>Current try: {actualTry}/{MAX_TRY}</div>
	<div class="border-4 empty:hidden">
		{#each { length: actualTry } as _, i}
			{#if answers[i]}<div>Try {i}: {answers[i]}</div>{/if}
		{/each}{#if actualTry >= MAX_TRY}
			Share: {answers.map((x) => (x === name ? '🟩' : '🟥' ?? '⬛')).join('')}
		{/if}
	</div>
</div> -->

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
-->
<style lang="postcss">
	main {
		/* background-image: url('https://i.pinimg.com/736x/5c/6f/cf/5c6fcf9e874611d218994847c9b708e4.jpg'); */
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
