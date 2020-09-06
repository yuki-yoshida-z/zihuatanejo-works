<template>
  <div class="copy-right-msg">
    <p class="copy-right-msg__text nw-copyRightMsg">&copy;2020&nbsp;Zihuatanejo</p>
  </div>
</template>

<style lang="sass" scoped>
  .copy-right-msg
    margin-top: 12px
    text-align: left
    font-size: 14px
    color: $text-black
    .isMobile &
      margin-top: 0
      display: flex
      align-items: center

    &__text
      .isMobile &
        margin: 0

</style>
