<template>
  <div class="top">
    <h1 class="msg">
      <transition name="first-line" enter-active-class="animate__animated animate__fadeIn firstLine">
        <span v-html="firstLineSentence" class="first-sentence nw-msgFirstLine" v-show="lineAnimation"></span>
      </transition>
      <transition name="second-line" enter-active-class="animate__animated animate__fadeInRight secondLine" v-on:after-enter="dynamicWordAnimationStart">
        <span v-html="secondLineSentence" class="second-sentence nw-msgSecondLine" v-show="lineAnimation"></span>
      </transition>
      <span class="third-line nw-msgThirdLine">
        <span
          v-show="dynamicWordAnimation"
          v-for="(letter, i) in selectWord"
          :key="i"
          class="last-word animate__animated"
          :class="[selectLetterColor(i), {animate__flipInX: flipIn, animate__flipOutX: flipOut, isLastLetter: evalLastLetter(i)}]"
          :style="{animationDelay: i*100+'ms'}"
          v-text="letter"
        />
      </span>
    </h1>
  </div>
</template>

<script>

export default {
  name: 'top',

  data () {
    return {
      lineAnimation: false,
      firstLineSentence: 'LET <span style="color: #333;">ME</span> HELP <span style="color: #eb4f53;">Y</span><span style="color: #333;">OU</span>',
      secondLineSentence: 'with <span style="color: #44d394;">Y</span><span style="color: #333;">OUR</span>',
      dynamicWordAnimation: false,
      dynamicWords: ["INNOVATION", "CHALLENGE", "DevOps", "GROWTH"],
      selectedWordsNum: 0,
      updateWordTimer: null,
      flipIn: true,
      flipOut: false,
      letterColorName: ["red", "yellow", "black", "green", "orange"]
    }
  },

  mounted(){
    this.lineAnimation = true
    window.addEventListener('animationend', this.changeDynamicWord, false)
  },

  destroyed(){
    window.removeEventListener('animationend', this.changeDynamicWord, false)
  },

  computed: {
    selectWord(){
      return this.dynamicWords[this.selectedWordsNum]
    },

    evalLastLetter(){
      return (i) => {
        if(this.dynamicWords[this.selectedWordsNum].length - 1 === i){
          return true
        }
      }
    },

    selectLetterColor(){
      return (i) => {
        if(i > this.letterColorName.length - 1){
          return 'is-' + this.letterColorName[i % this.letterColorName.length]
        }else{
          return 'is-' + this.letterColorName[i]
        }
      }
    }
  },

  methods: {
    dynamicWordAnimationStart(){
      this.dynamicWordAnimation = true
    },

    changeDynamicWord(e){
      if(e.target.classList.contains('isLastLetter')){
        if(e.animationName === 'flipInX'){
          setTimeout( () => {
            this.flipOut = true
          }, 2000)
        }else{
          setTimeout( () => {
            this.flipOut = false
            if(this.selectedWordsNum === this.dynamicWords.length - 1){
              this.selectedWordsNum = 0
            }else{
              this.selectedWordsNum += 1
            }
          }, 1000)
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.top
  position: relative
  display: flex
  align-items: center
  height: 100vh
  padding: 0 40px
  text-align: left
  font-family: Montserrat,Avenir Next,Century Gothic,游ゴシック体,YuGothic,游ゴシック,Yu Gothic,ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,sans-serif
  font-weight: bold
  background-color: $theme-color-top
  background-image: url("../assets/hourGlass.svg")
  background-position: right
  background-size: contain
  .isMobile &
    background-position: top
    height: calc(100vh - 6rem)
    padding: 0
    background-size: cover

.msg
  position: relative
  display: block
  color: #fff
  letter-spacing: 0.2vw
  .isMobile &
    margin: 0 auto
    padding: 1rem 0
    width: 100%
    background-color: rgba(0, 0, 0, 0.3)

.firstLine
  animation-delay: .2s

.secondLine
  animation-delay: 1s

.third-line
  display: block
  height: 10vw
  text-align: right
  .isMobile &
    text-align: center
    height: 4rem

.first-sentence
  display: block
  font-size: 6vw
  text-align: right
  .isMobile &
    font-size: 2.3rem
    text-align: center

.second-sentence
  display: block
  font-size: 5vw
  text-align: right
  .isMobile &
    font-size: 2rem
    text-align: center

.last-word
  display: inline-block
  font-size: 7vw
  .isMobile &
    font-size: 2.8rem
    text-align: center

  &.is-white
    color: #fff

  &.is-black
    color: #333

  &.is-red
    color: $main-red

  &.is-yellow
    color: $main-yellow

  &.is-green
    color: $main-green

  &.is-orange
    color: $main-orange

</style>
