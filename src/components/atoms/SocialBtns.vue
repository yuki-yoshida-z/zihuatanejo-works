<template>
  <ul class="social-btns nw-socialBtns">
    <li class="social-btns__list" v-for="item in socialItems" :key="item.name">
      <a :href="item.path" :class="['social-btns__link', 'is-' + item.name]" target="_blank">
        <v-icon :size="iconSize" class="social-btns__icon">{{ 'mdi-' + item.name}}</v-icon>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      socialItems: [
        {
          name: 'facebook',
          path: 'http://www.facebook.com/share.php?u=https://zihuatanejo.works'
        },
        {
          name: 'twitter',
          path: 'https://twitter.com/share'
        },
        {
          name: 'github',
          path: 'https://github.com/yuki-yoshida-z'
        }
      ]
    }
  },

  computed: {
    iconSize() {
      return this.$mq === 'sp' || this.$mq === 'tableBreakPoint' ? 30 : 32;
    }
  }
}
</script>

<style lang="sass" scoped>
.social-btns
  display: flex
  padding: 0
  list-style: none
  justify-content: space-between
  .isMobile &
    flex-basis: 40%
    max-width: 140px
    align-items: center

  &__link
    text-decoration: none

    &.is-facebook:hover
      .social-btns__icon
        color: $facebook-blue

    &.is-twitter:hover
      .social-btns__icon
        color: $twitter-blue

    &.is-github:hover
      .social-btns__icon
        color: $github-black

</style>
