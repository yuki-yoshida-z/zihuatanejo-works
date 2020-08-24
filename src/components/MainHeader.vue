<template>
  <div>
    <div class="main-header__content">
      <div class="main-header__header">
        <header-logo-img/>
        <v-btn
          icon
          absolute
          color="#333"
          class="main-header__btn"
          @click="onToggleNav"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
      <div :class="['main-header__body', { isSlideOpen: slideNavOpen }]" @click="onToggleNav">
        <global-nav/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogoImg from '@/components/atoms/HeaderLogoImg.vue'
import GlobalNav from '@/components/GlobalNav.vue'

export default {
  components: {
    HeaderLogoImg,
    GlobalNav
  },

  data(){
    return {
      slideNavOpen: false
    }
  },

  methods: {
    onToggleNav(){
      console.log("toggle")
      this.slideNavOpen = this.slideNavOpen ? false : true
    }
  }
}
</script>

<style lang="sass" scoped>

.main-header__content
  position: fixed
  z-index: 4
  width: 200px
  height: 100%
  border-right: 1px solid $main-border-color
  background: #fff
  .isMobile &
    width: 100%
    height: 3rem
    border-right: none

.main-header__header
  padding: 24px
  .isMobile &
    position: relative
    z-index: 4
    display: flex
    height: 3rem
    padding: .4rem
    border-bottom: 1px solid $main-border-color
    background-color: #fff

.main-header__body
  margin-top: 24px
  .isMobile &
    transition: top .5s
    position: relative
    top: -110vh
    margin-top: 0
    height: 100vh
    z-index: 3
  &.isSlideOpen
    top: 0

.main-header__btn
  top:  .4rem
  right: .4rem

</style>
