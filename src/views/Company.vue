<template>
  <div class="company">
    <page-background page-name="is-company" />
    <page-heading heading-en="COMPANY" heading-ja="企業概要" />
    <div class="company-content">
      <div class="company-body">
        <ul class="company-body__list">
          <li class="company-body__list-item">
            <span class="company-body__list-title">社名</span>
            <span class="company-body__list-text">株式会社ジワタネホ</span>
          </li>
          <li class="company-body__list-item">
            <span class="company-body__list-title">創業</span>
            <span class="company-body__list-text">2021年6月1日</span>
          </li>
          <li class="company-body__list-item">
            <span class="company-body__list-title">URL</span>
            <span class="company-body__list-text">
              <router-link to="/" class="company-body__list-link">
                https://zihuatanejo.works
              </router-link>
            </span>
          </li>
          <li class="company-body__list-item">
            <span class="company-body__list-title">代表者</span>
            <span class="company-body__list-text">代表取締役 吉田優輝</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import PageBackground from '@/components/atoms/PageBackground.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'

export default {
  name: 'company',

  components: {
    PageBackground,
    PageHeading
  }
}
</script>

<style lang="sass" scoped>

.company
  min-height: 100vh

.company-content
  position: relative
  display: flex
  flex-wrap: wrap
  margin-top: 24px
  padding: 0 7%
  .isMobile &
    padding: 0 1rem
    margin-bottom: 7%

.company-body

  &__list
    list-style: none
    .isMobile &
      padding: 0

  &__list-item
    margin-top: .6rem
    &:first-child
      margin-top: 0
    .isMobile &
      margin-top: 1rem

  &__list-title
    display: inline-block
    width: 140px
    margin-right: 1rem
    font-size: 2.4vh
    font-weight: bold
    color: $theme-color-profile
    .isMobile &
      display: block
      text-align: left
      font-size: 1rem

  &__list-text
    font-size: 2.4vh
    .isMobile &
      display: block
      padding-left: 1rem
      font-size: 1rem

  &__list-link
    +text-link($color: $theme-color-profile, $hover-color: $theme-color-profile)
    text-decoration: underline
    &:hover
      .v-icon
        color: $theme-color-profile

</style>
