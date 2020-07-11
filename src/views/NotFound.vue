<template>
  <div class="notfound">
    <page-heading heading-en="404 NOT FOUND" heading-ja="ページが見つかりません" />
    <div class="notfound-content">
      <p class="notfound-content__text">ご指定のURLは存在しません。URLを確認してください。</p>
    </div>
  </div>
</template>

<script>
import PageHeading from '@/components/atoms/PageHeading.vue'

export default {
  name: 'notfound',
  components: {
    PageHeading
  }
}
</script>

<style lang="sass" scoped>

.notfound
  min-height: 100vh
  background-image: url("../assets/contactBg.svg")
  background-position: right
  background-size: contain

.notfound-content
  display: flex
  flex-wrap: wrap
  margin-top: 24px
  padding: 0 7%

  &__text
    color: $text-black
    font-size: 2.4vh
    line-height: 2

</style>
