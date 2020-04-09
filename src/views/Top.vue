<template>
  <div class="top">
    <h1 class="msg">
      <transition name="first-line" enter-active-class="animated fadeIn delay-1s">
        <span v-html="firstLineSentence" class="first-sentence" v-show="lineAnimation"></span>
      </transition>
      <transition name="second-line" enter-active-class="animated fadeInRight secondLine" v-on:after-enter="dynamicWordAnimationStart">
        <span v-html="secondLineSentence" class="second-sentence" v-show="lineAnimation"></span>
      </transition>
      <span class="third-line">
        <span
          v-show="dynamicWordAnimation"
          v-for="(letter, i) in selectWord"
          :key="i"
          class="last-word animated"
          :class="[selectLetterColor(i), {flipInX: flipIn, flipOutX: flipOut, isLastLetter: evalLastLetter(i)}]"
          :style="{animationDelay: i*100+'ms'}"
          v-text="letter"
        />
      </span>
    </h1>
  </div>
</template>

<script>

import 'animate.css'

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
    this.lineAnimation = true;
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
      this.dynamicWordAnimation = true;
    },
    changeDynamicWord(e){
      if(e.target.classList.contains('isLastLetter')){
        if(e.animationName === 'flipInX'){
          setTimeout( () => {
            this.flipOut = true;
          }, 2000);
        }else{
          setTimeout( () => {
            this.flipOut = false;
            if(this.selectedWordsNum === this.dynamicWords.length - 1){
              this.selectedWordsNum = 0
            }else{
              this.selectedWordsNum += 1
            }
          }, 1000);
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

.msg
  position: relative
  display: block
  color: #fff
  letter-spacing: 0.2vw

.secondLine
  animation-delay: 1.5s

.third-line
  display: block
  height: 10vw
  text-align: right

.first-sentence
  display: block
  font-size: 6vw
  text-align: right

.second-sentence
  display: block
  font-size: 5vw
  text-align: right

.last-word
  display: inline-block
  font-size: 7vw

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
