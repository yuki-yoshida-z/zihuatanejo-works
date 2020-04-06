<template>
  <transition name="curtain-toggle">
    <div v-show="curtainShow" class="page-curtain" :class="this.curtainColorClass"></div>
  </transition>
</template>

<script>

export default {
  name: "curtain",
  data(){
    return {
      curtainShow: true,
      curtainColorClass: 'is-top'
    }
  },
  mounted(){
    setTimeout( () => {
      this.curtainShow = false
    }, 300),
    this.$router.beforeEach((to, from, next) => {
      this.curtainColorClass = "is-" + to.name;
      this.curtainShow = true
      setTimeout( () => {
        next()
      }, 500);
    }),
    this.$router.afterEach((to) => {
      this.curtainColorClass = "is-" + to.name;
      setTimeout( () => {
        this.curtainShow = false
      }, 100);
    })
  }
};

</script>

<style lang="sass" scoped>

.page-curtain
  display: block
  width: 100%
  height: 100%
  position: fixed
  top: 0
  bottom: 0
  z-index: 2

  &.is-top
    background-color: $theme-color-top

  &.is-profile
    background-color: $theme-color-profile

  &.is-spec
    background-color: $theme-color-spec

  &.is-products
    background-color: $theme-color-products

  &.is-contact
    background-color: $theme-color-contact

.curtain-toggle-enter-active, .curtain-toggle-leave-active
  transition: width .5s;
  width: 100%

.curtain-toggle-enter
  width: 0

.curtain-toggle-leave-to
  width: 0
  right: 0

</style>
