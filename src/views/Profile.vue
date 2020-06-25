<template>
  <div class="profile">
    <page-heading heading-en="PROFILE" heading-ja="プロフィール" />
    <div class="profile-content">
      <transition name="fade-block" enter-active-class="animated fadeInLeft faster">
        <div v-if="BlockAnimationStart" class="profile-header">
          <img src="@/assets/profile.jpg" class="profile-header__img">
        </div>
      </transition>
      <transition name="fade-block" enter-active-class="animated fadeInRight faster">
        <div v-if="BlockAnimationStart" class="profile-body">
          <ul class="profile-body__list">
            <li class="profile-body__list-item">
              <span class="profile-body__list-title">ハンドルネーム</span>
              <span class="profile-body__list-text">{{ profile.name }}</span>
            </li>
            <li class="profile-body__list-item">
              <span class="profile-body__list-title">職業</span>
              <span class="profile-body__list-text">{{ profile.job }}</span>
            </li>
            <li class="profile-body__list-item">
              <span class="profile-body__list-title">年齢</span>
              <span class="profile-body__list-text">{{ calcAgeFromBirthday(profile.birthday) }}歳</span>
            </li>
            <li class="profile-body__list-item">
              <span class="profile-body__list-title">活動地域</span>
              <span class="profile-body__list-text">{{ profile.area }}</span>
            </li>
            <li class="profile-body__list-item">
              <span class="profile-body__list-title">趣味</span>
              <span class="profile-body__list-text">{{ joinArray(profile.hobby) }}</span>
            </li>
            <li class="profile-body__list-item">
              <span class="profile-body__list-title">GitHub</span>
              <span class="profile-body__list-text">
                <a class="profile-body__list-link" :href="profile.github.url" target="_blank">{{ profile.github.name }}<v-icon color="#eb4f53">mdi-open-in-new</v-icon></a>
              </span>
            </li>
          </ul>
        </div>
      </transition>
      <transition name="fade-block" enter-active-class="animated fadeInUp faster">
        <div v-if="BlockAnimationStart" class="profile-footer">
          <p class="profile-footer__title">経歴</p>
          <p class="profile-footer__text">{{ convertNewLine(profile.introduction) }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import PageHeading from '@/components/atoms/PageHeading.vue'

export default {
  name: 'profile',
  components: {
    PageHeading
  },
  data(){
    return {
      profile: {
        name: '',
        job: '',
        birthday: '',
        area: '',
        hobby: [],
        github: {url: '', name: ''},
        introduction: ''
      },
      BlockAnimationStart: false
    }
  },
  created(){
    firebase.firestore().collection('profiles').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.profile = doc.data()
        this.BlockAnimationStart = true
      })
    })
  },
  computed: {
    calcAgeFromBirthday(){
      return (birthday) => {
        if(birthday){
          const today = new Date()
          const birthdayToDate = birthday.toDate()
          let age = today.getFullYear() - birthdayToDate.getFullYear()
          if(today.getMonth() < birthdayToDate.getMonth() && today.getDate() > birthdayToDate.getDate()){
            age--
          }
          return age
        }
      }
    },
    joinArray(){
      return (arry) =>{
        return arry.join('、')
      }
    },
    convertNewLine(){
      return (text) =>{
        return text.replace(/\\n/g, '\n')
      }
    }
  }
}
</script>

<style lang="sass" scoped>

.profile-content
  display: flex
  flex-wrap: wrap
  margin-top: 24px
  padding: 0 7%

.profile-header
  flex-basis: 200px
  margin-right: 3vw

  &__img
    display: block
    width: 200px

.profile-body
  flex-basis: calc(100% - 200px - 3vw)
  color: $text-black

  &__list
    list-style: none

  &__list-item
    margin-top: .6rem
    &:first-child
      margin-top: 0

  &__list-title
    display: inline-block
    width: 140px
    margin-right: 1rem
    font-size: 1.2rem
    font-weight: bold
    color: $theme-color-profile
    text-align: right

  &__list-text
    font-size: 1.2rem

  &__list-link
    +text-link($color: $theme-color-profile, $hover-color: $theme-color-profile)
    text-decoration: underline
    &:hover
      .v-icon
        color: $theme-color-profile

    .v-icon
      margin-left: 4px
      font-size: .9rem
      color: $text-black

.profile-footer
  flex-basis: 100%
  margin-top:  1rem

  &__title
    font-size: 1.2rem
    font-weight: bold
    color: $theme-color-profile

  &__text
    padding: .4rem 1rem
    white-space: pre-line
    word-wrap: break-word
    font-size: 1.2rem
    line-height: 1.6

</style>
