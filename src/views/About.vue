<template>
  <div class="about">
    <page-heading heading-en="ABOUT" heading-ja="このサイトについて" />
    <div class="about-content">
      <div class="about-body">
        <transition name="fade-block" enter-active-class="animated fadeInLeft">
          <p v-if="blockAnimationStart" class="about-body__text is-first">Zihuatanejo Worksを閲覧いただきありがとうございます。<br>本サイトは<span class="is-strong is-color">フリーランスウェブエンジニアZihuatanejo</span>の<br>ポートフォリオサイトになります。</p>
        </transition>
        <transition name="fade-block" enter-active-class="animated fadeInRight">
          <p v-if="blockAnimationStart" class="about-body__text is-second"><span class="is-strong">一緒に仕事をさせていただいている方</span>、<br><span class="is-strong">一緒に仕事をするかどうかご検討中の方</span>、<br><span class="is-strong">ウェブサイトの制作依頼をご検討中の方</span>に<br>少しでも自分のことを知っていただくために制作しました。</p>
        </transition>
        <transition name="fade-block" enter-active-class="animated fadeInLeft">
          <p v-if="blockAnimationStart" class="about-body__text is-third">本サイトがきっかけとなって、<br><span class="is-strong is-color">お互いの発展や新たな出会い</span>に繋がることを心より願っております。<br>どうぞごゆっくりご覧ください。</p>
        </transition>
        <transition name="fade-block" enter-active-class="animated fadeInRight">
          <p v-if="blockAnimationStart" class="about-body__text is-caution is-forth">なお、本サイトはGitHubに公開してます。ご興味がある方は<a class="about-body__link" href="https://github.com/yuki-yoshida-z/zihuatanejo-works" target="_blank">こちら</a>からご覧ください。</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from '@/components/atoms/PageHeading.vue'

export default {
  name: 'about',
  components: {
    PageHeading
  },
  data(){
    return {
      blockAnimationStart: false
    }
  },
  mounted() {
    this.blockAnimationStart = true
  }
}
</script>

<style lang="sass" scoped>

.about
  min-height: 100vh
  background-image: url("../assets/aboutBg.svg")
  background-position: right
  background-size: contain

.about-content
  display: flex
  flex-wrap: wrap
  margin-top: 24px
  padding: 0 7%

.about-body
  &__text
    color: $text-black
    font-size: 2.4vh
    line-height: 2
    animation-duration: 1.5s

    &.is-second
      animation-delay: 0.5s

    &.is-third
      animation-delay: 1s

    &.is-forth
      animation-delay: 1.5s

    .is-color
      color: $theme-color-about

    .is-strong
      font-weight: bold

    &.is-caution
      font-size: 1.8vh

  &__link
    +text-link($color: $theme-color-about, $hover-color: $theme-color-about)

</style>
