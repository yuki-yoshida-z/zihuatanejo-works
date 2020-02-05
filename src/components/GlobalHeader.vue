<template>

    <div class="header-content">
      <div id="nav">
        <router-link to="/">Top</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-link to="/spec">Spec</router-link>
        <router-link to="/products">Favorite Products</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>

</template>

<style lang="stylus">

.header-content
  position: fixed
  z-index: 4
  width: 200px
  height: 100%
  border-right: 1px solid #eee
  background: #fff

</style>
