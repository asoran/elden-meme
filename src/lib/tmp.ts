export {};

function getLoginURL(scopes) {
	return (
		'https://accounts.spotify.com/authorize?client_id=' +
		'CLIENT_ID' +
		'&redirect_uri=' +
		encodeURIComponent(location.href) +
		'&scope=' +
		encodeURIComponent(scopes.join(' ')) +
		'&response_type=token'
	);
}
const url = getLoginURL([
	'user-read-private',
	'playlist-read-private',
	'playlist-modify-public',
	'playlist-modify-private',
	'user-library-read',
	'user-library-modify',
	'user-follow-read',
	'user-follow-modify',
]);

const width = 450,
	height = 730,
	left = screen.width / 2 - width / 2,
	top = screen.height / 2 - height / 2;

const w = window.open(
	url,
	'Spotify',
	'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
		width +
		', height=' +
		height +
		', top=' +
		top +
		', left=' +
		left,
);

window.addEventListener(
	'message',
	function (event) {
		console.log('got postmessage', event);
		const hash = JSON.parse(event.data);
		if (hash.type == 'access_token') {
			Auth.setAccessToken(hash.access_token, hash.expires_in || 60);
			checkUser(true);
		}
	},
	false,
);

function init() {
	console.log('hash', location.hash);

	const hash = {};
	location.hash
		.replace(/^#\/?/, '')
		.split('&')
		.forEach(function (kv) {
			const spl = kv.indexOf('=');
			if (spl != -1) {
				hash[kv.substring(0, spl)] = decodeURIComponent(kv.substring(spl + 1));
			}
		});

	console.log('initial hash', hash);

	if (hash.access_token) {
		window.opener.postMessage(
			JSON.stringify({
				type: 'access_token',
				access_token: hash.access_token,
				expires_in: hash.expires_in || 0,
			}),
			'*',
		);

		window.close();
	}
}

