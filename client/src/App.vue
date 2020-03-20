<template>
  <div id="app">
    <div id="banner"/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/sports">Sports</router-link> |
      <router-link to="/gyms">Gyms</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Roboto', 'Avenir', 'Helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #253544;
  /*color: #2c3e50;*/
}

#banner {
  margin: 0;
  padding: 40px;
  background-color: #e44e34;
  transition: top 0.3s;
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
  /*color: #42b983;*/
}
</style>
