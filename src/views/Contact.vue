<template>
  <div class="contact">
    <page-heading heading-en="CONTACT" heading-ja="お問い合わせ" />
    <div class="contact-content">
      <div class="contact-body">
        <template v-if="submitComplete">
          <div class=contact-body__msg-block>
            <p class="contact-body__thanks-title">お問い合せありがとうございます。</p>
            <p class="contact-body__thanks-text">内容を確認して近日中にご連絡いたします。</p>
            <p class="contact-body__thanks-caution-text">また、ご入力いただいたメールアドレスに確認メールをお送りしています。<br>メールが届かない場合は受信設定をご確認の上、再度お問い合せフォームからご連絡ください。</p>
          </div>
        </template>
        <template v-else>
          <div v-if="spinner" class="contact-body__spinner-block">
            <v-progress-circular
              :size="50"
              color="primary"
              indeterminate
            ></v-progress-circular>
          </div>
          <div :class="['contact-body__item', {'is-sending': spinner}]">
            <label class="contact-body__label is-required">氏名</label>
            <div class="contact-body__input-block">
              <text-field-unit
                element-type="text"
                display-name="氏名"
                name="fullName"
                placeholder="氏名"
                :validation-names="{ required: true, maxLength: 50 }"
                @update-form-params="updateValidList"
              />
            </div>
          </div>

          <div :class="['contact-body__item', {'is-sending': spinner}]">
            <label class="contact-body__label is-required">メールアドレス</label>
            <div class="contact-body__input-block">
              <text-field-unit
                element-type="text"
                display-name="メールアドレス"
                name="email"
                placeholder="zihuatanejo@example.com"
                :validation-names="{ required: true, maxLength: 100, email: true }"
                @update-form-params="updateValidList"
              />
            </div>
          </div>

          <div :class="['contact-body__item', {'is-sending': spinner}]">
            <label class="contact-body__label">会社名</label>
            <div class="contact-body__input-block">
              <text-field-unit
                element-type="text"
                display-name="会社名"
                name="company"
                placeholder="株式会社ジワタネホ"
                :validation-names="{ maxLength: 100 }"
                @update-form-params="updateValidList"
              />
            </div>
          </div>

          <div :class="['contact-body__item', {'is-sending': spinner}]">
            <label class="contact-body__label is-required">お問い合せ内容</label>
            <div class="contact-body__input-block is-radio">
              <v-radio-group v-model="selectedInquiryType" :mandatory="false">
                <v-radio  v-for="type in inquiryTypes" :key="type" color="#315def" :label="type" :value="type"></v-radio>
              </v-radio-group>
            </div>
          </div>

          <div :class="['contact-body__item', {'is-sending': spinner}]">
            <label class="contact-body__label is-required">お問い合せ詳細</label>
            <div class="contact-body__input-block">
              <text-field-unit
                element-type="textarea"
                display-name="お問い合せ詳細"
                name="inquiry"
                placeholder="LP製作に関しての見積もりを依頼します。"
                :validation-names="{ required: true, maxLength: 1000 }"
                @update-form-params="updateValidList"
              />
            </div>
          </div>

          <div :class="['contact-body__item', {'is-sending': spinner}]">
            <div class="contact-body__input-block">
              <v-btn
                x-large
                :disabled="!canSubmit"
                color="primary"
                width="100%"
                class="contact-body__submit-btn"
                @click="onSubmit"
              >送信</v-btn>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import PageHeading from '@/components/atoms/PageHeading.vue'
import TextFieldUnit from '@/components/atoms/TextFieldUnit.vue'

export default {
  name: 'contact',

  components: {
    PageHeading,
    TextFieldUnit
  },

  data(){
    return {
      fullNmae: '',
      email: '',
      company: '',
      selectedInquiryType: '開発チームアサインについて',
      inquiryTypes: ['開発チームアサインについて', 'Webページ制作のお見積もりについて', 'このサイトについて', 'その他'],
      inquiry: '',
      validList: {
        fullName: false,
        email: false,
        company: true,
        inquiry: false
      },
      canSubmit: false,
      spinner: false,
      submitComplete: false
    }
  },

  mounted(){
    this.spinner = false
    this.submitComplete = false
  },

  methods: {
    updateValidList(list){
      this.validList[list.name] = list.valid
      this.$set(this.validList, list.name, list.valid)
      if(Object.values(this.validList).indexOf(false) === -1){
        this.canSubmit = true
      }else{
        this.canSubmit = false
      }
      this.updateFormParams(list.name, list.value)
    },

    updateFormParams(key, value){
      if(key === 'fullName'){
        this.fullName = value
      }else if(key === 'email'){
        this.email = value
      }else if(key === 'company'){
        this.company = value
      }else if(key === 'inquiry'){
        this.inquiry = value
      }
    },

    onSubmit(){
      if(this.canSubmit === true){
        this.spinner = true
        const submitDate = {
          fullName: this.fullName,
          email: this.email,
          company: this.company,
          inquiryType: this.selectedInquiryType,
          inquiry: this.inquiry,
          sendAt: new Date()
        }
        firebase.firestore().collection('contacts').doc("inquiries").set(submitDate)
          .then(() => {
            this.spinner = false
            this.submitComplete = true
          })
          .catch(() => {
            alert('エラーによりお問い合せ内容を送信できませんでした。ページをリロードして再度お試しください。')
          })
      }
    }
  }
}
</script>

<style lang="sass" scoped>

.contact
  min-height: 100vh
  background-image: url("../assets/contactBg.svg")
  background-position: right
  background-size: contain

.contact-content
  display: flex
  flex-wrap: wrap
  margin-top: 24px
  padding: 0 7%

.contact-body
  position: relative
  padding-bottom: 120px

  &__thanks-title
    font-size: 1.4rem
    font-weight: bold

  &__thanks-text
    font-size: 1.4rem
    font-weight: bold

  &__thanks-caution-text
    font-size: .8rem

  &__spinner-block
    position: fixed
    left: 50%
    bottom: 50%

  &__item
    display: block
    width: 640px
    margin-top: 16px
    margin-top: 36px
    &.is-sending
      opacity: .3

  &__label
    font-size: 20px
    font-weight: bold
    color: $text-black

  &__label.is-required
    &:after
      content: "（必須）"
      color: $theme-color-contact
      font-size: 16px

  &__input-block
    margin-top: 8px

    &.is-radio
      padding-left: 24px

  &__submit-btn
    font-weight: bold
    font-size: 20px

  button.v-btn[disabled]
    background-color: #000

</style>
