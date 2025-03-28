<template>
	<div id="app">
		<Banner />
        <!--
		<div id="nav">
			<router-link to="/">Sports</router-link> |
			<router-link to="/gyms">Gyms</router-link>
		</div>
        -->
		<router-view/>
	</div>
</template>

<script>
import Banner from './components/Banner'

export default {
	components: {
		Banner
	}
}
</script>

<style>
#app {
	font-family: 'Roboto', 'Avenir', 'Helvetica', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #253544;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: rgb(228,78,52);
}
</style>
