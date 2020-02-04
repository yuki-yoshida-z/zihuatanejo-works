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
  font-family: '游ゴシック体', YuGothic, '游ゴシック', Yu Gothic, 'ヒラギノ角ゴ ProN W3', Hiragino Kaku Gothic ProN, 'メイリオ', Meiryo, sans-serif
</style>

<script>
import 'ress'

export default {
  name: 'App'
}
</script>
