<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Top</router-link> |
      <router-link to="/profile">Profile</router-link>
      <router-link to="/spec">Spec</router-link>
      <router-link to="/products">Favorite Products</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
