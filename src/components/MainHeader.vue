<template>
  <div class="main-header__content">
    <div class="main-header__header">
      <header-logo-img/>
    </div>
    <div class="main-header__body">
      <global-nav/>
    </div>
  </div>
</template>

<style lang="stylus">

.main-header__content
  position: fixed
  z-index: 4
  width: 200px
  height: 100%
  border-right: 1px solid #eee
  background: #fff

.main-header__header
  padding: 24px

.main-header__body
  margin-top: 24px

</style>

<script>
import HeaderLogoImg from '@/components/atoms/HeaderLogoImg.vue'
import GlobalNav from '@/components/GlobalNav.vue'

export default {
  components: {
    HeaderLogoImg,
    GlobalNav
  }
}
</script>
