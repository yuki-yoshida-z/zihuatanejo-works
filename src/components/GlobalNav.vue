<template>
  <ul class="global-nav__list">
    <router-link v-for="page in pages" :key="page.id" tag="li" :to="{ path: page.href }" :class="convertstrclassname(page.name)">
      <a>{{ page.name }}</a>
    </router-link>
  </ul>
</template>

<style lang="sass" scoped>
.global-nav__list
  display: block

  li
    position: relative
    display: block
    width: 100%
    padding: 12px 24px
    &:before
      content: ""
      position: absolute
      top: 0
      left: -200px
      display: block
      width: 100%
      height: 100%
      transition: left .3s

    &.router-link-exact-active
      &:before
        left: 0
      a
        color: #fff

  a
    position: relative
    z-index: 2
    color: $text-black
    text-decoration: none
    font-size: 1rem
    font-weight: bold
    transition: color .3s

  .is-top a:hover
    color: $theme-color-top

  .is-profile a:hover
    color: $theme-color-profile

  .is-spec a:hover
    color: $theme-color-spec

  .is-products a:hover
    color: $theme-color-products

  .is-contact a:hover
    color: $theme-color-contact

  .router-link-exact-active a:hover
    color: #fff

  .router-link-exact-active.is-top
    &:before
      background-color: $theme-color-top

  .router-link-exact-active.is-profile
    &:before
      background-color: $theme-color-profile

  .router-link-exact-active.is-spec
    &:before
      background-color: $theme-color-spec

  .router-link-exact-active.is-favorite-products
    &:before
      background-color: $theme-color-products

  .router-link-exact-active.is-contact
    &:before
      background-color: $theme-color-contact

</style>

<script>
export default {
  data () {
    return {
      pages: [
        { id: 1, name: 'Top', href: '/' },
        { id: 2, name: 'Profile', href: 'profile' },
        { id: 3, name: 'Spec', href: 'spec' },
        { id: 4, name: 'Favorite Products', href: 'products' },
        { id: 5, name: 'Contact', href: 'contact' }
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
