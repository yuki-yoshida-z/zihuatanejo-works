<template>
  <div class="mobile-footer">
    <social-btns />
    <copy-right-msg />
  </div>
</template>

<script>
import SocialBtns from '@/components/atoms/SocialBtns.vue'
import CopyRightMsg from '@/components/atoms/CopyRightMsg.vue'

export default {
  components: {
    SocialBtns,
    CopyRightMsg
  }
}
</script>

<style lang="sass" scoped>
.mobile-footer
  display: flex
  padding: 1rem
  border-top: 1px solid $main-border-color
  justify-content: space-between
  .isMobile &
    height: 3rem
    padding: .4rem 1rem
    background-color: #fff
    width: 100%
    position: fixed
    bottom: 0
    z-index: 3

</style>
