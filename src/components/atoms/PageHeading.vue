<template>
  <h1 class="page-heading">
    <span class="page-heading__en nw-pageHeadingEn">{{ headingEn }}</span>
    <span class="page-heading__ja nw-pageHeadingJa">{{ headingJa }}</span>
  </h1>
</template>

<script>
export default {
  props: {
    headingEn: String,
    headingJa: String
  }
}
</script>

<style lang="sass" scoped>
.page-heading
  position: relative
  display: block
  padding: 100px 7% 48px
  .isMobile &
    padding: 2rem 2rem 0

  &__en
    display: block
    font-family: Montserrat,Avenir Next,Century Gothic,游ゴシック体,YuGothic,游ゴシック,Yu Gothic,ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,sans-serif
    font-weight: 600
    font-size: 4rem
    line-height: 1.1
    color: $text-black
    .isMobile &
      font-size: 2.4rem

  &__ja
    display: block
    font-size: 1.2rem

    .scene-about &
      color: $theme-color-about

    .scene-profile &
      color: $theme-color-profile

    .scene-spec &
      color: $theme-color-spec

    .scene-products &
      color: $theme-color-products

    .scene-company &
      color: $theme-color-profile

    .scene-contact &
      color: $theme-color-contact

</style>
