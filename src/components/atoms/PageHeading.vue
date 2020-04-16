<template>
  <h1 class="page-heading">
    <span class="page-heading__en">{{ headingEn }}</span>
    <span class="page-heading__ja">{{ headingJa }}</span>
  </h1>
</template>

<script>
export default {
  name: 'pageHeading',
  props: {
    headingEn: String,
    headingJa: String
  }
}
</script>

<style lang="sass" scoped>
.page-heading
  display: block
  padding: 100px 7%

  &__en
    display: block
    font-family: Montserrat,Avenir Next,Century Gothic,游ゴシック体,YuGothic,游ゴシック,Yu Gothic,ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,sans-serif
    font-weight: 600
    font-size: 4rem
    line-height: 1.1
    color: $text-black

  &__ja
    display: block
    font-size: 1.5rem

    .scene-profile &
      color: $theme-color-profile

    .scene-spec &
      color: $theme-color-spec

    .scene-products &
      color: $theme-color-products

    .scene-contact &
      color: $theme-color-contact

</style>
