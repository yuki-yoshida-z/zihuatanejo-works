<template>
  <div id="app">
    <v-app style="height: 0; margin: 0; padding: 0;">
      <div :class="this.sceneClass">
        <main-header/>
        <div class="main-content" :class="bgStyle">
          <page-curtain/>
          <router-view/>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import PageCurtain from '@/components/atoms/PageCurtain.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    PageCurtain
  },
  data(){
    return{
      sceneClass: 'scene-top'
    }
  },
  mounted () {
    this.$router.afterEach((to) => {
      this.sceneClass = "scene-" + to.name;
    })
  },
  computed: {
    bgStyle(){
      return this.$route.name === 'top' ? 'is-hourGlass' : 'is-' + this.$route.name + 'HalfHourGlass'
    }
  }
}
</script>

<style lang="sass">

#app
  font-family: '游ゴシック体', YuGothic, '游ゴシック', Yu Gothic, 'ヒラギノ角ゴ ProN W3', Hiragino Kaku Gothic ProN, 'メイリオ', Meiryo, sans-serif

.main-content
  position: relative
  min-height: 100vh
  padding-left: 200px
  overflow: hidden
  background-color: #fff
  background-position: right
  background-size: contain

  .scene-top &
    background-color: $theme-color-top

  &.is-hourGlass
    background-image: url("./assets/hourGlass.svg")

  &.is-aboutHalfHourGlass
    background-image: url("./assets/aboutBg.svg")

  &.is-profileHalfHourGlass
    background-image: url("./assets/profileBg.svg")

  &.is-specHalfHourGlass
    background-image: url("./assets/specBg.svg")

  &.is-productsHalfHourGlass
    background-image: url("./assets/productsBg.svg")

  &.is-contactHalfHourGlass
    background-image: url("./assets/contactBg.svg")

</style>
