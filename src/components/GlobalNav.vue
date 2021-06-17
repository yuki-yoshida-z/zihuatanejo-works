<template>
  <ul class="global-nav__list nw-globalNav">
    <router-link v-for="page in pages" :key="page.id" tag="li" :to="{ path: page.href }" :class="convertstrclassname(page.name)">
      <a class="global-nav__link nw-globalNavLink">{{ page.name }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      pages: [
        { id: 1, name: 'Top', href: '/' },
        { id: 2, name: 'About', href: 'about' },
        { id: 3, name: 'Profile', href: 'profile' },
        { id: 4, name: 'Spec', href: 'spec' },
        { id: 5, name: 'Favorite Products', href: 'products' },
        { id: 6, name: 'Company', href: 'company' },
        { id: 7, name: 'Contact', href: 'contact' }
      ],
    }
  },

  methods: {
    convertstrclassname(str){
      return 'is-' + str.split(' ').map(s => s.toLowerCase()).join('-')
    }
  }
}
</script>

<style lang="sass" scoped>

.global-nav__list
  display: block
  overflow: hidden
  padding: 0

li
  position: relative
  display: block
  width: 100%

li.is-top
  a:hover:before
    background-color: $theme-color-top

li.is-about
  a:hover:before
    background-color: $theme-color-about

li.is-profile
  a:hover:before
    background-color: $theme-color-profile

li.is-spec
  a:hover:before
    background-color: $theme-color-spec

li.is-favorite-products
  a:hover:before
    background-color: $theme-color-products

li.is-company
  a:hover:before
    background-color: $theme-color-company

li.is-contact
  a:hover:before
    background-color: $theme-color-contact

.global-nav__link
  position: relative
  display: block
  padding: 12px 24px
  font-size: 1rem
  font-weight: bold
  color: $text-black
  text-decoration: none
  transition: color .3s
  .isMobile &
    text-align: center
    border-bottom: 1px solid $main-border-color
    background-color: #fff

  &:hover
    color: #fff
    &:before
      left: 0

  &:before
    content: ""
    position: absolute
    top: 0
    left: -200px
    display: block
    width: 100%
    height: 100%
    z-index: -1
    transition: left .3s

.router-link-exact-active
  a:before
    left: 200px

  &.is-top
    a
      color: $theme-color-top

  &.is-about
    a
      color: $theme-color-about

  &.is-profile
    a
      color: $theme-color-profile

  &.is-spec
    a
      color: $theme-color-spec

  &.is-favorite-products
    a
      color: $theme-color-products

  &.is-contact
    a
      color: $theme-color-contact

</style>
