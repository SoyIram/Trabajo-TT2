module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{css,png,jpeg,svg,html,js,psd,json}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};