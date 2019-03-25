<template>
	<div class="navbar">
		<nav class="nav" :class="{active: isActive}">
			<nuxt-link
				v-for="navItem in navBarItems"
				:key="navItem.id"
				:to="navItem.path"
				class="nav__item">
				<span v-html="navItem.name"></span>
			</nuxt-link>
		</nav>
		<div class="navbar__toggle" @click="isActive = !isActive" :class="{active: isActive}">
			<i></i>
			<i></i>
			<i></i>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	data () {
		return {
			isActive: false,
			navBarItems: [
				{
					id: 0,
					name: 'Works',
					path: '/works'
				}, {
					id: 1,
					name: 'Bio',
					path: '/bio'
				}, {
					id: 2,
					name: 'Contact',
					path: '/contact'
				}
			]
		}
	}
}
</script>

<style lang="postcss" scoped>
.nav {
	position: fixed;
	top: 0;
	left: 0;
	height: 0;
	width: 100%;
	overflow: hidden;
	z-index: 10;
	padding-top: .5rem;
	text-align: center;
	transition: all .3s ease-in;
	opacity: 0;

	&.active {
		height: 100vh;
		opacity: 1;
		background-color: #ffffff;
	}
}
.nav__item {
	display: table;
	margin-left: auto;
	margin-right: auto;
	padding: .8rem 0;
}

/* Hamburger Nav */
.navbar__toggle {
	cursor: pointer;
	width: 55px;
	height: 15px;
	line-height: 15px;
	margin: auto 0;
	padding-left: 1rem;
	padding-right: 1rem;

	& i {
		background-color: #333333;
		border-radius: 4px;
		content: '';
		display: block;
		width: 100%;
		height: 2px;
	}

	& i:nth-child(1) {
		animation: outT .8s backwards;
		animation-direction: reverse;
	}

	& i:nth-child(2) {
		margin: 5px 0;
		animation: outM .8s backwards;
		animation-direction: reverse;
	}

	& i:nth-child(3) {
		animation: outBtm .8s backwards;
		animation-direction: reverse;
	}

	&.active {
		position: relative;
		z-index: 10;

		& i:nth-child(1) {
			animation: inT .8s forwards;
		}

		& i:nth-child(2) {
			animation: inM .8s forwards;
		}

		& i:nth-child(3) {
			animation: inBtm .8s forwards;
		}
	}
}

@keyframes inM {
	50% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(45deg);
	}
}

@keyframes outM {
	50% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(45deg);
	}
}

@keyframes inT {
	0% {
		transform: translateY(0) rotate(0deg);
	}

	50% {
		transform: translateY(7px) rotate(0deg);
	}

	100% {
		transform: translateY(7px) rotate(135deg);
	}
}

@keyframes outT {
	0% {
		transform: translateY(0) rotate(0deg);
	}

	50% {
		transform: translateY(7px) rotate(0deg);
	}

	100% {
		transform: translateY(7px) rotate(135deg);
	}
}

@keyframes inBtm {
	0% {
		transform: translateY(0) rotate(0deg);
	}

	50% {
		transform: translateY(-7px) rotate(0deg);
	}

	100% {
		transform: translateY(-7px) rotate(135deg);
	}
}

@keyframes outBtm {
	0% {
		transform: translateY(0) rotate(0deg);
	}

	50% {
		transform: translateY(-7px) rotate(0deg);
	}

	100% {
		transform: translateY(-7px) rotate(135deg);
	}
}
</style>
