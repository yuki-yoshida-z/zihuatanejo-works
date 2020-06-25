<template>
  <div class="about">
    <page-heading heading-en="ABOUT" heading-ja="サイト概要" />
  </div>
</template>

<script>
import PageHeading from '@/components/atoms/PageHeading.vue'

export default {
  name: 'about',
  components: {
    PageHeading
  },
  data(){
    return {
      msg: ''
    }
  }
}
</script>

<style lang="sass" scoped>

.about
  min-height: 100vh
  background-image: url("../assets/aboutBg.svg")
  background-position: right
  background-size: contain

.about-content
  display: flex
  flex-wrap: wrap
  margin-top: 24px
  padding: 0 7%

  &__text
    color: $text-black
    font-size: 1.4rem
    line-height: 2

    .is-color
      color: $theme-color-about

    .is-strong
      font-weight: bold

</style>
