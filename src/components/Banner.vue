<template>
	<div id="banner">
		<h1 id="title">Welcome to sportscalendar</h1>
		<div id="metatitle">
			Quick and easy access to view daily sports - for more info, visit
			<a id="cslink" href="https://www.campussport.fi/">CampusSport</a>
		</div>
	</div>
</template>

<style scoped>
#banner {
	margin: 0;
	padding: 40px;
	background-color: #e44e34;
	transition: top 0.3s;
}

#title {
	text-align: left;
	color: white;
}

#metatitle {
	text-align: left;
	padding-left: 50px;
	color: rgb(250, 250, 250);
}

#cslink {
	color: white;
    text-decoration: underline;
	transition: color 0.4s;
}

#cslink:hover {
	color: rgb(223, 223, 223);
}

@media only screen and (max-width: 770px) {
    #metatitle {
        padding-left: 0px;
    }
}
</style>