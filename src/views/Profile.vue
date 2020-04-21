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
          <li class="profile-body__list-item">
            <span class="profile-body__list-title">ブログ</span>
            <span class="profile-body__list-text">
              <a class="profile-body__list-link" :href="profile.blog.url" target="_blank">{{ profile.blog.name }}<v-icon>mdi-open-in-new</v-icon></a>
            </span>
          </li>
        </ul>
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
        blog: {name: 'Zihuatanejo To Me', url: "https://zihuatanejo.blog"}
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
  margin-top: 24px
  padding: 0 7%

.profile-header
  flex-basis: 200px
  margin-right: 3vw

  &__img
    display: block
    width: 200px

.profile-body
  color: $text-black

  &__list
    list-style: none

  &__list-item
    margin-top: 1rem
    &:first-child
      margin-top: 0

  &__list-title
    margin-right: 2rem
    font-size: 1.2rem
    font-weight: bold
    color: $theme-color-profile

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

</style>
