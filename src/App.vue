<template>
  <div id="app">
    <div :class="this.sceneClass">
      <main-header/>
      <div class="main-content">
        <page-curtain/>
        <router-view/>
        <helf-hexagon/>
      </div>
    </div>
  </div>
</template>

<style lang="sass">

#app
  font-family: '游ゴシック体', YuGothic, '游ゴシック', Yu Gothic, 'ヒラギノ角ゴ ProN W3', Hiragino Kaku Gothic ProN, 'メイリオ', Meiryo, sans-serif

.main-content
  position: relative
  min-height: 100vh
  padding-left: 200px
  overflow: hidden

.lines
  display: flex
  height: 100vh
  top: 0
  position: fixed
  right: 0
  width: 120px

.line
  position: relative
  display: block
  width: 24px

</style>

<script>
import 'ress'
import MainHeader from '@/components/MainHeader.vue'
import PageCurtain from '@/components/atoms/PageCurtain.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    PageCurtain,
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
  }
}
</script>
