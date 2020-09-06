<template>
  <div>
    <div class="main-header__content nw-mainHeader">
      <div class="main-header__header">
        <header-logo/>
        <v-btn
          v-if="isMobile"
          icon
          absolute
          color="#333"
          class="main-header__btn nw-mainHeaderToggleBtn"
          @click="onToggleNav"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
      <div :class="['main-header__body', { isSlideOpen: slideNavOpen }, 'nw-mainHeaderMenu']" @click="onToggleNav">
        <global-nav/>
      </div>
      <div class="main-header__footer" v-if="!isMobile">
        <social-btns />
        <copy-right-msg />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogo from '@/components/atoms/HeaderLogo.vue'
import GlobalNav from '@/components/GlobalNav.vue'
import SocialBtns from '@/components/atoms/SocialBtns.vue'
import CopyRightMsg from '@/components/atoms/CopyRightMsg.vue'


export default {
  components: {
    HeaderLogo,
    GlobalNav,
    SocialBtns,
    CopyRightMsg
  },

  data(){
    return {
      slideNavOpen: false
    }
  },

  computed: {
    isMobile(){
      return this.$mq === 'sp' || this.$mq === 'tableBreakPoint'
    }
  },

  methods: {
    onToggleNav(){
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

.main-header__footer
  position: absolute
  bottom: 0
  display: block
  padding-left: 24px

</style>
