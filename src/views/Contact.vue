<template>
  <div class="contact">
    <page-heading heading-en="CONTACT" heading-ja="お問い合わせ" />
    <div class="contact-content">
      <div class="contact-body">
        <template v-if="submitComplete">
          <div class=contact-body__msg-block>
            <p class="contact-body__thanks-title nw-contactThanksTitle">お問い合せありがとうございます。</p>
            <p class="contact-body__thanks-text nw-contactThanksText">内容を確認して近日中にご連絡いたします。</p>
            <p class="contact-body__thanks-caution-text nw-contactThanksCautionText">ご入力いただいたメールアドレスに確認メールをお送りしています。<br>メールが届かない場合は受信設定をご確認の上、再度お問い合せフォームからご連絡ください。</p>
          </div>
        </template>
        <template v-else>
          <div v-if="spinner" class="contact-body__spinner-block nw-contactSpinnerBlock">
            <v-progress-circular
              :size="50"
              color="primary"
              indeterminate
            ></v-progress-circular>
          </div>
          <div :class="['contact-body__item', {'is-sending': spinner}, 'nw-contactItem']">
            <label class="contact-body__label is-required nw-contactFormLabelName">氏名</label>
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

          <div :class="['contact-body__item', {'is-sending': spinner}, 'nw-contactItem']">
            <label class="contact-body__label is-required nw-contactFormLabelEmail">メールアドレス</label>
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

          <div :class="['contact-body__item', {'is-sending': spinner}, 'nw-contactItem']">
            <label class="contact-body__label nw-contactFormLabelCompany">会社名</label>
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

          <div :class="['contact-body__item', {'is-sending': spinner}, 'nw-contactItem']">
            <label class="contact-body__label is-required nw-contactFormLabelInpuiryType">お問い合わせ内容</label>
            <div class="contact-body__input-block is-radio">
              <v-radio-group v-model="selectedInquiryType" :mandatory="false">
                <v-radio  v-for="(type, index) in inquiryTypes" :id="'inquiryTypes_' + index" :key="type" color="#315def" :label="type" :value="type"></v-radio>
              </v-radio-group>
            </div>
          </div>

          <div :class="['contact-body__item', {'is-sending': spinner}, 'nw-contactItem']">
            <label class="contact-body__label is-required nw-contactFormLabelInquiry">お問い合わせ詳細</label>
            <div class="contact-body__input-block">
              <text-field-unit
                element-type="textarea"
                display-name="お問い合わせ詳細"
                name="inquiry"
                placeholder="LP製作に関しての見積もりを依頼します。"
                :validation-names="{ required: true, maxLength: 1000 }"
                @update-form-params="updateValidList"
              />
            </div>
          </div>

          <div :class="['contact-body__item', {'is-sending': spinner}, 'nw-contactItem']">
            <div class="contact-body__input-block">
              <v-btn
                x-large
                :disabled="!canSubmit"
                color="primary"
                width="100%"
                class="contact-body__submit-btn nw-contactFormSubmitBtn"
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
      sendAt: '',
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
        this.sendAt = new Date()
        const submitDate = {
          fullName: this.fullName,
          email: this.email,
          company: this.company,
          inquiryType: this.selectedInquiryType,
          inquiry: this.inquiry,
          sendAt: this.sendAt,
          adminChecked: false
        }
        firebase.firestore().collection(process.env.VUE_APP_CONTACTS_COLLECTION_NAME).add(submitDate)
          .then(() => {
            this.spinner = false
            this.submitComplete = true
            this.sendMail('User')
            this.sendMail('Admin')
          })
          .catch(() => {
            alert('エラーによりお問い合せ内容を送信できませんでした。ページをリロードして再度お試しください。')
          })
      }
    },

    sendMail(sendTo){
      const toAddress = (() => {
        switch (sendTo) {
            case "Admin": return process.env.VUE_APP_ADMIN_MAIL;
            case "User": return this.email;
        }
      })();

      const fromAddress = (() => {
        switch (sendTo) {
            case "Admin": return this.email;
            case "User": return process.env.VUE_APP_ADMIN_MAIL;
        }
      })();

      const subject = (() => {
        switch (sendTo) {
            case "Admin": return process.env.VUE_APP_CONTACT_NOTICE_SUBJECT;
            case "User": return process.env.VUE_APP_CONTACT_THANKS_SUBJECT;
        }
      })();

      const contentHTML = (() => {
        switch (sendTo) {
          case "Admin":
            return "<code>" + "<p>" + process.env.VUE_APP_CONTACT_NOTICE_SUBJECT + "</p><p>" + "【お問い合わせ内容】" + "<br>" + "日時：" + this.sendAt + "<br>" + "氏名：" + this.fullName + "<br>" + "メールアドレス：" + this.email + "<br>" + "会社名：" + this.company + "<br>" + "お問い合わせ内容：" + this.selectedInquiryType + "<br>" + "お問い合わせ詳細：" + this.inquiry + "</p></code>";
          case "User":
            return "<code>" + "<p>" + process.env.VUE_APP_CONTACT_THANKS_SUBJECT + "<br>"  + "内容を確認して近日中にご連絡いたします。" + "</p><p>" + "【お問い合わせ内容】" + "<br>" + "氏名：" + this.fullName + "<br>" + "メールアドレス：" + this.email + "<br>" + "会社名：" + this.company + "<br>" + "お問い合わせ内容：" + this.selectedInquiryType + "<br>" + "お問い合わせ詳細：" + this.inquiry + "</p><p>" + "本メールにお心当たりのない方はお手数ですが" + process.env.VUE_APP_ADMIN_MAIL + "までご連絡ください。" + "</p></code>";
        }
      })();

      const contentText = (() => {
        switch (sendTo) {
          case "Admin":
            return  process.env.VUE_APP_CONTACT_NOTICE_SUBJECT + "\r\n\r\n" + "【お問い合わせ内容】" + "\r\n" + "日時：" + this.sendAt + "\r\n" + "氏名：" + this.fullName + "\r\n" + "メールアドレス：" + this.email + "\r\n" + "会社名：" + this.company + "\r\n" + "お問い合わせ内容：" + this.selectedInquiryType + "\r\n" + "お問い合わせ詳細：" + this.inquiry;
          case "User":
            return process.env.VUE_APP_CONTACT_THANKS_SUBJECT + "\r\n\r\n"  + "内容を確認して近日中にご連絡いたします。" + "\r\n\r\n" + "【お問い合わせ内容】" + "\r\n" + "氏名：" + this.fullName + "\r\n" + "メールアドレス：" + this.email + "\r\n" + "会社名：" + this.company + "\r\n" + "お問い合わせ内容：" + this.selectedInquiryType + "\r\n" + "お問い合わせ詳細：" + this.inquiry + "\r\n\r\n" + "本メールにお心当たりのない方はお手数ですが" + process.env.VUE_APP_ADMIN_MAIL + "までご連絡ください。";
        }
      })();

      const sendDate = {
        to: [toAddress],
        from: fromAddress,
        message: {
          subject: subject,
          text: contentText,
          html: contentHTML
        }
      }
      firebase.firestore().collection('contact_mails').add(sendDate)
        .then(() => {
          console.log("メールの送信が完了しました")
        })
    }
  }
}
</script>

<style lang="sass" scoped>

.contact
  background-image: url("../assets/contactBg.svg")
  background-position: right
  background-size: contain
  overflow-y: scroll
  height: 100vh

.contact-content
  display: flex
  flex-wrap: wrap
  margin-top: 24px
  padding: 0 7%
  .isMobile &
    padding: 0 2rem

.contact-body
  position: relative
  padding-bottom: 120px
  width: 100%

  &__thanks-title
    font-size: 1.4rem
    font-weight: bold
    .isMobile &
      font-size: 1rem

  &__thanks-text
    font-size: 1.4rem
    font-weight: bold
    .isMobile &
      font-size: 1rem

  &__thanks-caution-text
    font-size: .8rem

  &__spinner-block
    position: fixed
    left: 50%
    bottom: 50%
    .isMobile &
      left: auto
      width: calc(100% - 4rem)
      text-align: center

  &__item
    display: block
    width: 640px
    margin-top: 36px
    &.is-sending
      opacity: .3
    .isMobile &
      width: 100%
      margin-top: 1rem

  &__label
    font-size: 20px
    font-weight: bold
    color: $text-black
    .isMobile &
      font-size: 1.2rem

  &__label.is-required
    &:after
      content: "（必須）"
      color: $theme-color-contact
      font-size: 16px
      .isMobile &
        font-size: 1rem

  &__input-block
    margin-top: 8px

    &.is-radio
      padding-left: 24px
      .isMobile &
        padding: 0

  &__submit-btn
    font-weight: bold
    font-size: 20px
    .isMobile &
      font-size: 1.2rem

  button.v-btn[disabled]
    background-color: #000

</style>
