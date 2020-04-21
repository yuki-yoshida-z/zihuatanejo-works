<template>
  <div class="profile">
    <page-heading heading-en="PROFILE" heading-ja="プロフィール" />
    <div class="profile-content">
      <div class="profile-header">
        <img src="@/assets/profile.jpg" class="profile-header__img">
      </div>
      <div class="profile-body">
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
            <span class="profile-body__list-text">{{ profile.hobby.join("、") }}</span>
          </li>
          <li class="profile-body__list-item">
            <span class="profile-body__list-title">GitHub</span>
            <span class="profile-body__list-text">
              <a class="profile-body__list-link" :href="profile.github.url" target="_blank">{{ profile.github.name }}<v-icon>mdi-open-in-new</v-icon></a>
            </span>
          </li>
        </ul>
      </div>
      <div class="profile-footer">
        <p class="profile-footer__title">経歴</p>
        <p class="profile-footer__text">{{ profile.introduction }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from '@/components/atoms/PageHeading.vue'

export default {
  name: 'profile',
  components: {
    PageHeading
  },
  data(){
    return {
      profile: {
        name: "Zihuatanejo（ジワタネホ）",
        job: "ウェブエンジニア",
        birthday: new Date("1985/4/9"),
        area: "都内近郊",
        hobby: ["海外サッカー情報収集", "映画鑑賞", "海外ドラマ鑑賞"],
        github: {name: 'yuki-yoshida-z', url: "https://github.com/yuki-yoshida-z"},
        introduction: `高校時代に自分達のバンドのホームページを作ることからウェブ制作を始る。
                       24歳で地元の友人と起業。
                       取締役として約4年間、代表取締役として約3年間営業代行業やイベント事業などを行う。
                       2016年代表取締役を辞任し、心機一転フリーランスウェブエンジニアとして独立。
                      `
      }
    }
  },
  computed: {
    calcAgeFromBirthday(){
      return (birthday) => {
        const today = new Date();
        let age = today.getFullYear() - birthday.getFullYear()
        if(today.getMonth() < birthday.getMonth() && today.getDate() > birthday.getDate()){
          age--;
        }
        return age
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
    +text-link($hover-color: $theme-color-profile)
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
