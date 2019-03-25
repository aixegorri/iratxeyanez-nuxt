<template>
	<div class="page">
		<header class="main-header">
			<Navbar />
		</header>
		<nuxt />
		<footer class="main-footer">
			<div class="container">
				<h3 class="main-footer__brand">
					Iratxe Yañez.
				</h3>
				<p>Basque Artist.</p>
				<p><nuxt-link to="/contact">Get in touch</nuxt-link></p>
				<hr>
				<p class="copy">© Copyright {{ new Date().getFullYear() }}. All Rights Reserved.</p>
			</div>
		</footer>
	</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
	components: {
		Navbar
	}
}
</script>

<style language="postcss">
html {
	font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

a {
	color: var(--link-color);
}

/* FOOTER */
.main-footer {
	background-color: var(--color-lighter-grey);
}
</style>
