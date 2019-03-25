module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		// '@nuxtjs',
		// 'plugin:nuxt/recommended'
		'@vue/standard',
		'plugin:vue/essential'
	],
	// add your custom rules here
	rules: {
		// Indentation
		'indent': ['error', 'tab'],
		// Allow tabs
		'no-tabs': ['error', { allowIndentationTabs: true }]
	},
}
