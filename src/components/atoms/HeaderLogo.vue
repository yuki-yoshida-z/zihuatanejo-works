<template>
  <div class="header-logo">
    <router-link to="/" class="header-logo__link">
      <img :src="imgSrc" class="header-logo__img">
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    isMobile(){
      return this.$mq === 'sp' || this.$mq === 'tableBreakPoint'
    },

    imgSrc(){
      return this.isMobile ? require('@/assets/logo_sp.png') : require('@/assets/logo.png')
    }
  }
}
</script>

<style lang="sass" scoped>

.header-logo
  display: block
  width: 120px
  .isMobile &
    display: flex
    align-items: center
    padding-left: 8px
    width: 192px

  &__link
    display: block
    transition: opacity .5s
    &:hover
      opacity: .5

  &__img
    display: block
    width: 100%

</style>
