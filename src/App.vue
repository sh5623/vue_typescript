<template>
  <div id="app">
    <nav>
      <router-link to="/">Basic Vue</router-link> |
      <router-link to="/vuex">Vuex</router-link> |
      <router-link to="/todo">Todo List</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
