<template>
  <div class="contact">
    <page-heading heading-en="CONTACT" heading-ja="お問い合わせ" />
  </div>
</template>

<script>
import PageHeading from '@/components/atoms/PageHeading.vue'

export default {
  name: 'contact',
  components: {
    PageHeading
  }
}
</script>

<style lang="sass" scoped>

.contact
  min-height: 100vh
  background-image: url("../assets/contactBg.svg")
  background-position: right
  background-size: contain

</style>
