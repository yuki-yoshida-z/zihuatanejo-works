<template>
  <ul class="global-nav__list">
    <router-link v-for="page in pages" :key="page.id" tag="li" :to="{ path: page.href }" :class="page.themeColor">
      <a>{{ page.name }}</a>
    </router-link>
  </ul>
</template>

<style lang="stylus" scoped>
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
    color: #000
    text-decoration: none
    transition: color .3s

  .theme-blue a:hover
    color: #43bbde

  .theme-red a:hover
    color: #f41b30

  .theme-yellow a:hover
    color: #facd00

  .theme-green a:hover
    color: #3cbd80

  .theme-purple a:hover
    color: #7f629a

  .router-link-exact-active a:hover
    color: #fff

  .router-link-exact-active.theme-blue
    &:before
      background-color: #43bbde

  .router-link-exact-active.theme-red
    &:before
      background-color: #f41b30

  .router-link-exact-active.theme-yellow
    &:before
      background-color: #facd00

  .router-link-exact-active.theme-green
    &:before
      background-color: #3cbd80

  .router-link-exact-active.theme-purple
    &:before
      background-color: #7f629a

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
