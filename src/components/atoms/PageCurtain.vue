<template>
  <div class="page-curtain" :class="this.openStatus"></div>
</template>

<style lang="sass" scoped>

.page-curtain
  display: block
  width: 100%
  height: 100%
  position: fixed
  top: 0
  bottom: 0
  transition: width .4s

  &.is-open
    width: 0
    right: 0

  &.is-close
    width: 100%
    left: 0

  .scene-top &
    background-color: $theme-color-top

  .scene-profile &
    background-color: $theme-color-profile

  .scene-spec &
    background-color: $theme-color-spec

  .scene-products &
    background-color: $theme-color-products

  .scene-contact &
    background-color: $theme-color-contact

</style>

<script>
export default {
  name: "curtain",
  data () {
    return {
      openStatus: 'is-open',
      isOpen: true
    }
  },
  watch: {
    'isOpen': function () {
      this.isOpen ? this.open() : this.close();
    }
  },
  mounted () {
    this.$router.beforeEach((to, from, next) => {
      this.isOpen = false;
      next();
    })
    this.$router.afterEach(() => {
      setTimeout( () => {
        this.isOpen = true;
      }, 800);
    })
  },
  methods: {
    close: function () {
      this.openStatus = 'is-close';
    },
    open: function () {
      this.openStatus = 'is-open';
    }
  }
};
</script>
