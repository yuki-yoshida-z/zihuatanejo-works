<template>
  <div id="app">
    <global-header/>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="stylus">
#app
  font-family: '游ゴシック体', YuGothic, '游ゴシック', Yu Gothic, 'ヒラギノ角ゴ ProN W3', Hiragino Kaku Gothic ProN, 'メイリオ', Meiryo, sans-serif

.main-content
  position: relative
  padding-left: 200px
  overflow: hidden

</style>

<script>
import 'ress'
import GlobalHeader from '@/components/GlobalHeader.vue'

export default {
  name: 'App',
  components: {
    GlobalHeader
  }
}
</script>
