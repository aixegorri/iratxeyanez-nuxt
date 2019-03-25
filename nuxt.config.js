import pkg from './package'

export default {
	mode: 'universal',

	/*
	** Headers of the page
	*/
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },

	/*
	** Global CSS
	*/
	css: [
		'~/assets/css/styles.css'
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
	],

	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend (config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},
		postcss: {
			// Add plugin names as key and arguments as value
			// Install them before as dependencies with npm or yarn
			plugins: {
			// Disable a plugin by passing false as value
				'postcss-url': false,
				'stylelint': {
					'rules': {
						'color-hex-length': 'long'
					}
				}
			},
			preset: {
			// Change the postcss-preset-env settings
				autoprefixer: {
					grid: true
				},
				stage: 0
			}
		}
	}
}
