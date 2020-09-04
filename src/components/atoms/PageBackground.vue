<template>
  <div :class="['page-background', pageName]"></div>
</template>


<script>
export default {
  props: {
    pageName: String
  }
}
</script>

<style lang="sass" scoped>
.page-background
  display: block
  position: fixed
  top: 0
  right: 0
  width: 100vw
  height: 100vh
  background-position: right

  &.is-about
    background-image: url("../../assets/aboutBg.svg")

  &.is-profile
    background-image: url("../../assets/profileBg.svg")

  &.is-spec
    background-image: url("../../assets/specBg.svg")

  &.is-products
    background-image: url("../../assets/productsBg.svg")

  &.is-contact
    background-image: url("../../assets/contactBg.svg")

</style>
