<template>
  <ul class="global-nav__list">
    <router-link v-for="page in pages" :key="page.id" tag="li" :to="{ path: page.href }" :class="page.themeColor">
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
    transition: color .3s

  .theme-blue a:hover
    color: $theme-blue

  .theme-red a:hover
    color: $theme-red

  .theme-yellow a:hover
    color: $theme-yellow

  .theme-green a:hover
    color: $theme-green

  .theme-purple a:hover
    color: $theme-purple

  .router-link-exact-active a:hover
    color: #fff

  .router-link-exact-active.theme-blue
    &:before
      background-color: $theme-blue

  .router-link-exact-active.theme-red
    &:before
      background-color: $theme-red

  .router-link-exact-active.theme-yellow
    &:before
      background-color: $theme-yellow

  .router-link-exact-active.theme-green
    &:before
      background-color: $theme-green

  .router-link-exact-active.theme-purple
    &:before
      background-color: $theme-purple

</style>

<script>
export default {
  data () {
    return {
      pages: [
        { id: 1, name: 'Top', href: '/', themeColor: 'theme-blue'  },
        { id: 2, name: 'Profile', href: '/profile', themeColor: 'theme-red'  },
        { id: 3, name: 'Spec', href: '/spec', themeColor: 'theme-yellow'  },
        { id: 4, name: 'Favorite Products', href: 'products', themeColor: 'theme-green'  },
        { id: 5, name: 'Contact', href: 'contact', themeColor: 'theme-purple'  }
      ],
    }
  }
}
</script>
