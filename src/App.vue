<template>
  <div id="app">
    <v-app style="height: 0; margin: 0; padding: 0;">
      <div :class="[sceneClass, { isMobile: isMobile }]">
        <main-header/>
        <div class="main-content" :class="bgStyle">
          <page-curtain/>
          <router-view/>
        </div>
        <mobile-footer v-if="isMobile" />
      </div>
    </v-app>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import PageCurtain from '@/components/atoms/PageCurtain.vue'
import MobileFooter from '@/components/MobileFooter.vue'

export default {
  name: 'App',

  components: {
    MainHeader,
    PageCurtain,
    MobileFooter
  },

  computed: {
    sceneClass(){
      return this.$route.name === 'top' ? 'scene-top' : 'scene-' + this.$route.name
    },

    bgStyle(){
      return this.$route.name === 'top' ? 'is-hourGlass' : 'is-' + this.$route.name + 'HalfHourGlass'
    },

    isMobile(){
      return this.$mq === 'sp' || this.$mq === 'tableBreakPoint'
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

  .isMobile &
    padding: 3rem 0

</style>
