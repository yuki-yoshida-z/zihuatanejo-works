module.exports = {
  'Contactページの各要素の初期表示': browser => {
    browser
      .url('http://localhost:8080/contact')
      .assert.not.elementPresent('.nw-contactThanksTitle')
      .assert.not.elementPresent('.nw-contactThanksText')
      .assert.not.elementPresent('.nw-contactThanksCautionText')
      .assert.not.elementPresent('.nw-contactSpinnerBlock')
      .assert.visible('.nw-contactFormLabelName')
      .assert.containsText(".nw-contactFormLabelName", "氏名")
      .assert.visible('input[type=text]#fullName')
      .assert.not.visible('.nw-textFieldDisplayFullName')
      .assert.not.elementPresent('.nw-contactItem\:first-child .v-messages__message')
      .assert.visible('.nw-contactFormLabelEmail')
      .assert.containsText(".nw-contactFormLabelEmail", "メールアドレス")
      .assert.visible('input[type=text]#email')
      .assert.not.visible('.nw-textFieldDisplayEmail')
      .assert.not.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')
      .assert.visible('.nw-contactFormLabelCompany')
      .assert.containsText(".nw-contactFormLabelCompany", "会社名")
      .assert.visible('input[type=text]#company')
      .assert.not.visible('.nw-textFieldDisplayCompany')
      .assert.not.elementPresent('.nw-contactItem\:nth-child(3) .v-messages__message')
      .assert.visible('.nw-contactFormLabelInpuiryType')
      .assert.containsText(".nw-contactFormLabelInpuiryType", "お問い合わせ内容")
      .assert.elementPresent('input#inquiryTypes_0[type=radio]')
      .assert.value('input#inquiryTypes_0[type=radio]', "開発チームアサインについて")
      .assert.elementPresent('input#inquiryTypes_1[type=radio]')
      .assert.value('input#inquiryTypes_1[type=radio]', "Webページ制作のお見積もりについて")
      .assert.elementPresent('input#inquiryTypes_2[type=radio]')
      .assert.value('input#inquiryTypes_2[type=radio]', "このサイトについて")
      .assert.elementPresent('input#inquiryTypes_3[type=radio]')
      .assert.value('input#inquiryTypes_3[type=radio]', "その他")
      .assert.visible('.nw-contactFormLabelInquiry')
      .assert.containsText(".nw-contactFormLabelInquiry", "お問い合わせ詳細")
      .assert.visible('textarea#inquiry')
      .assert.not.visible('.nw-textFieldDisplayInquiry')
      .assert.not.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')
      .assert.visible('.nw-contactFormSubmitBtn')
      .end()
  },

  '氏名のバリデーション': browser => {
    browser
      .url('http://localhost:8080/contact')
      .assert.visible('input[type=text]#fullName')
      .assert.not.visible('.nw-textFieldDisplayFullName')
      .assert.value('input[type=text]#fullName', "")
      .assert.not.elementPresent('.nw-contactItem\:first-child .v-messages__message')

      .setValue('input[type=text]#fullName', "a")
      .assert.not.elementPresent('.nw-contactItem\:first-child .v-messages__message')

      .click('.nw-contactFormLabelName')
      .assert.not.visible('input[type=text]#fullName')
      .assert.visible('.nw-textFieldDisplayFullName')
      .assert.containsText(".nw-textFieldDisplayFullName", "a")
      .assert.not.elementPresent('.nw-contactItem\:first-child .v-messages__message')

      .click('.nw-textFieldDisplayFullName button')
      .assert.visible('input[type=text]#fullName')
      .assert.not.visible('.nw-textFieldDisplayFullName')
      .assert.value('input[type=text]#fullName', "a")
      .assert.not.elementPresent('.nw-contactItem\:first-child .v-messages__message')

      .setValue('input[type=text]#fullName', "a".repeat(50))
      .assert.elementPresent('.nw-contactItem\:first-child .v-messages__message')
      .assert.containsText(".nw-contactItem\:first-child .v-messages__message", "氏名は51文字以上は入力できません")

      .click('.nw-contactFormLabelName')
      .assert.visible('input[type=text]#fullName')
      .assert.not.visible('.nw-textFieldDisplayFullName')
      .assert.value('input[type=text]#fullName', "a".repeat(51))
      .assert.elementPresent('.nw-contactItem\:first-child .v-messages__message')

      .url('http://localhost:8080/contact')
      .setValue('input[type=text]#fullName', "a".repeat(50))
      .assert.not.elementPresent('.nw-contactItem\:first-child .v-messages__message')

      .click('.nw-contactFormLabelName')
      .assert.not.visible('input[type=text]#fullName')
      .assert.visible('.nw-textFieldDisplayFullName')
      .assert.containsText(".nw-textFieldDisplayFullName", "a".repeat(50))
      .assert.not.elementPresent('.nw-contactItem\:first-child .v-messages__message')

      .click('.nw-textFieldDisplayFullName button')
      .assert.visible('input[type=text]#fullName')
      .assert.not.visible('.nw-textFieldDisplayFullName')
      .assert.value('input[type=text]#fullName', "a".repeat(50))
      .assert.not.elementPresent('.nw-contactItem\:first-child .v-messages__message')

      .url('http://localhost:8080/contact')
      .setValue('input[type=text]#fullName', "")
      .click('.nw-contactFormLabelName')
      .assert.elementPresent('.nw-contactItem\:first-child .v-messages__message')
      .assert.containsText(".nw-contactItem\:first-child .v-messages__message", "氏名を入力してください")
      .click('.nw-contactFormLabelName')
      .assert.visible('input[type=text]#fullName')
      .assert.not.visible('.nw-textFieldDisplayFullName')
      .assert.value('input[type=text]#fullName', "")
      .assert.elementPresent('.nw-contactItem\:first-child .v-messages__message')

      .setValue('input[type=text]#fullName', "テスト")
      .assert.not.elementPresent('.nw-contactItem\:first-child .v-messages__message')

      .click('.nw-contactFormLabelName')
      .assert.not.visible('input[type=text]#fullName')
      .assert.visible('.nw-textFieldDisplayFullName')
      .assert.containsText(".nw-textFieldDisplayFullName", "テスト")
      .assert.not.elementPresent('.nw-contactItem\:first-child .v-messages__message')
  },

  'メールアドレスのバリデーション': browser => {
    browser
      .url('http://localhost:8080/contact')
      .assert.visible('input[type=text]#email')
      .assert.not.visible('.nw-textFieldDisplayEmail')
      .assert.value('input[type=text]#email', "")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')

      .setValue('input[type=text]#email', "test@example.com")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')

      .click('.nw-contactFormLabelEmail')
      .assert.not.visible('input[type=text]#email')
      .assert.visible('.nw-textFieldDisplayEmail')
      .assert.containsText(".nw-textFieldDisplayEmail", "test@example.com")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')

      .click('.nw-textFieldDisplayEmail button')
      .assert.visible('input[type=text]#email')
      .assert.not.visible('.nw-textFieldDisplayEmail')
      .assert.value('input[type=text]#email', "test@example.com")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')

      .setValue('input[type=text]#email', "a".repeat(89) + "@example.com")
      .assert.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')
      .assert.containsText(".nw-contactItem\:nth-child(2) .v-messages__message", "メールアドレスは101文字以上は入力できません")

      .click('.nw-contactFormLabelEmail')
      .assert.visible('input[type=text]#email')
      .assert.not.visible('.nw-textFieldDisplayEmail')
      .assert.value('input[type=text]#email', "test@example.com" + "a".repeat(89) + "@example.com")
      .assert.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')

      .url('http://localhost:8080/contact')
      .setValue('input[type=text]#email', "a".repeat(88) + "@example.com")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')

      .click('.nw-contactFormLabelEmail')
      .assert.not.visible('input[type=text]#email')
      .assert.visible('.nw-textFieldDisplayEmail')
      .assert.containsText(".nw-textFieldDisplayEmail", "a".repeat(88) + "@example.com")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')

      .click('.nw-textFieldDisplayEmail button')
      .assert.visible('input[type=text]#email')
      .assert.not.visible('.nw-textFieldDisplayEmail')
      .assert.value('input[type=text]#email', "a".repeat(88) + "@example.com")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')

      .url('http://localhost:8080/contact')
      .setValue('input[type=text]#email', "test")

      .click('.nw-contactFormLabelName')
      .assert.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')
      .assert.containsText(".nw-contactItem\:nth-child(2) .v-messages__message", "メールアドレスの形式に誤りがあります")

      .click('.nw-contactFormLabelName')
      .assert.visible('input[type=text]#email')
      .setValue('input[type=text]#email', "@example")
      .assert.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')
      .assert.containsText(".nw-contactItem\:nth-child(2) .v-messages__message", "メールアドレスの形式に誤りがあります")

      .click('.nw-contactFormLabelName')
      .assert.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')
      .assert.containsText(".nw-contactItem\:nth-child(2) .v-messages__message", "メールアドレスの形式に誤りがあります")

      .click('.nw-contactFormLabelName')
      .assert.visible('input[type=text]#email')
      .setValue('input[type=text]#email', "@example,com")
      .assert.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')
      .assert.containsText(".nw-contactItem\:nth-child(2) .v-messages__message", "メールアドレスの形式に誤りがあります")

      .click('.nw-contactFormLabelName')
      .assert.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')
      .assert.containsText(".nw-contactItem\:nth-child(2) .v-messages__message", "メールアドレスの形式に誤りがあります")

      .url('http://localhost:8080/contact')
      .setValue('input[type=text]#email', "")
      .click('.nw-contactFormLabelName')
      .assert.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')
      .assert.containsText(".nw-contactItem\:nth-child(2) .v-messages__message", "メールアドレスを入力してください")

      .click('.nw-contactFormLabelEmail')
      .assert.visible('input[type=text]#email')
      .assert.not.visible('.nw-textFieldDisplayEmail')
      .assert.value('input[type=text]#email', "")
      .assert.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')

      .setValue('input[type=text]#email', "test@example.com")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')

      .click('.nw-contactFormLabelEmail')
      .assert.not.visible('input[type=text]#email')
      .assert.visible('.nw-textFieldDisplayEmail')
      .assert.containsText(".nw-textFieldDisplayEmail", "test@example.com")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(2) .v-messages__message')
  },

  '企業名のバリデーション': browser => {
    browser
      .url('http://localhost:8080/contact')
      .assert.visible('input[type=text]#company')
      .assert.not.visible('.nw-textFieldDisplayCompany')
      .assert.value('input[type=text]#company', "")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(3) .v-messages__message')

      .setValue('input[type=text]#company', "株式会社テスト")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(3) .v-messages__message')

      .click('.nw-contactFormLabelCompany')
      .assert.not.visible('input[type=text]#company')
      .assert.visible('.nw-textFieldDisplayCompany')
      .assert.containsText(".nw-textFieldDisplayCompany", "株式会社テスト")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(3) .v-messages__message')

      .click('.nw-textFieldDisplayCompany button')
      .assert.visible('input[type=text]#company')
      .assert.not.visible('.nw-textFieldDisplayCompany')
      .assert.value('input[type=text]#company', "株式会社テスト")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(3) .v-messages__message')

      .setValue('input[type=text]#company', "a".repeat(94))
      .assert.elementPresent('.nw-contactItem\:nth-child(3) .v-messages__message')
      .assert.containsText(".nw-contactItem\:nth-child(3) .v-messages__message", "会社名は101文字以上は入力できません")

      .click('.nw-contactFormLabelCompany')
      .assert.visible('input[type=text]#company')
      .assert.not.visible('.nw-textFieldDisplayCompany')
      .assert.value('input[type=text]#company', "株式会社テスト" + "a".repeat(94))
      .assert.elementPresent('.nw-contactItem\:nth-child(3) .v-messages__message')

      .url('http://localhost:8080/contact')
      .setValue('input[type=text]#company', "a".repeat(100))
      .assert.not.elementPresent('.nw-contactItem\:nth-child(3) .v-messages__message')

      .click('.nw-contactFormLabelCompany')
      .assert.not.visible('input[type=text]#company')
      .assert.visible('.nw-textFieldDisplayCompany')
      .assert.containsText(".nw-textFieldDisplayCompany", "a".repeat(100))
      .assert.not.elementPresent('.nw-contactItem\:nth-child(3) .v-messages__message')

      .click('.nw-textFieldDisplayCompany button')
      .assert.visible('input[type=text]#company')
      .assert.not.visible('.nw-textFieldDisplayCompany')
      .assert.value('input[type=text]#company', "a".repeat(100))
      .assert.not.elementPresent('.nw-contactItem\:nth-child(3) .v-messages__message')

      .url('http://localhost:8080/contact')
      .setValue('input[type=text]#company', "")
      .click('.nw-contactFormLabelName')
      .assert.not.elementPresent('.nw-contactItem\:nth-child(3) .v-messages__message')
      .assert.visible('input[type=text]#company')
      .assert.not.visible('.nw-textFieldDisplayCompany')
      .assert.value('input[type=text]#company', "")
  },

  '問い合わせ詳細のバリデーション': browser => {
    browser
      .url('http://localhost:8080/contact')
      .assert.visible('textarea#inquiry')
      .assert.not.visible('.nw-textFieldDisplayInquiry')
      .assert.value('textarea#inquiry', "")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')

      .setValue('textarea#inquiry', "a")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')

      .click('.nw-contactFormLabelInquiry')
      .assert.not.visible('textarea#inquiry')
      .assert.visible('.nw-textFieldDisplayInquiry')
      .assert.containsText(".nw-textFieldDisplayInquiry", "a")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')

      .click('.nw-textFieldDisplayInquiry button')
      .assert.visible('textarea#inquiry')
      .assert.not.visible('.nw-textFieldDisplayInquiry')
      .assert.value('textarea#inquiry', "a")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')

      .setValue('textarea#inquiry', "a".repeat(1000))
      .assert.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')
      .assert.containsText(".nw-contactItem\:nth-child(5) .v-messages__message", "お問い合わせ詳細は1001文字以上は入力できません")

      .click('.nw-contactFormLabelInquiry')
      .assert.visible('textarea#inquiry')
      .assert.not.visible('.nw-textFieldDisplayInquiry')
      .assert.value('textarea#inquiry', "a".repeat(1001))
      .assert.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')

      .url('http://localhost:8080/contact')
      .setValue('textarea#inquiry', "a".repeat(1000))
      .assert.not.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')

      .click('.nw-contactFormLabelInquiry')
      .assert.not.visible('textarea#inquiry')
      .assert.visible('.nw-textFieldDisplayInquiry')
      .assert.containsText(".nw-textFieldDisplayInquiry", "a".repeat(1000))
      .assert.not.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')

      .click('.nw-textFieldDisplayInquiry button')
      .assert.visible('textarea#inquiry')
      .assert.not.visible('.nw-textFieldDisplayInquiry')
      .assert.value('textarea#inquiry', "a".repeat(1000))
      .assert.not.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')

      .url('http://localhost:8080/contact')
      .setValue('textarea#inquiry', "")
      .click('.nw-contactFormLabelInquiry')
      .assert.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')
      .assert.containsText(".nw-contactItem\:nth-child(5) .v-messages__message", "お問い合わせ詳細を入力してください")
      .click('.nw-contactFormLabelInquiry')
      .assert.visible('textarea#inquiry')
      .assert.not.visible('.nw-textFieldDisplayInquiry')
      .assert.value('textarea#inquiry', "")
      .assert.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')

      .setValue('textarea#inquiry', "テスト")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')

      .click('.nw-contactFormLabelInquiry')
      .assert.not.visible('textarea#inquiry')
      .assert.visible('.nw-textFieldDisplayInquiry')
      .assert.containsText(".nw-textFieldDisplayInquiry", "テスト")
      .assert.not.elementPresent('.nw-contactItem\:nth-child(5) .v-messages__message')
  },

  '送信ボタンのdisabledの挙動': browser => {
    browser
      // Invalidが複数の場合
      .url('http://localhost:8080/contact')

      .setValue('input[type=text]#fullName', 'テスト')

      .click('.nw-contactFormLabelName')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#email', 'test@example.com')

      .click('.nw-contactFormLabelEmail')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#company', '株式会社テスト')

      .click('.nw-contactFormLabelCompany')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=radio]#inquiryTypes_1', ['checked', true])

      .setValue('textarea#inquiry', "テスト")
      .click('.nw-contactFormLabelInquiry')
      .assert.not.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      // nameがInvalidの場合
      .url('http://localhost:8080/contact')

      .setValue('input[type=text]#fullName', '')

      .click('.nw-contactFormLabelName')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#email', 'test@example.com')

      .click('.nw-contactFormLabelEmail')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#company', '株式会社テスト')

      .click('.nw-contactFormLabelCompany')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=radio]#inquiryTypes_2', ['checked', true])

      .setValue('textarea#inquiry', "テスト")
      .click('.nw-contactFormLabelInquiry')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      // emailがInvalidの場合
      .url('http://localhost:8080/contact')

      .setValue('input[type=text]#fullName', 'テスト')

      .click('.nw-contactFormLabelName')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#email', 'test.com')

      .click('.nw-contactFormLabelEmail')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#company', '株式会社テスト')

      .click('.nw-contactFormLabelCompany')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=radio]#inquiryTypes_1', ['checked', true])

      .setValue('textarea#inquiry', "テスト")
      .click('.nw-contactFormLabelInquiry')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      // companyが未入力の場合
      .url('http://localhost:8080/contact')

      .setValue('input[type=text]#fullName', 'テスト')

      .click('.nw-contactFormLabelName')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#email', 'test@example.com')

      .click('.nw-contactFormLabelEmail')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=radio]#inquiryTypes_3', ['checked', true])

      .setValue('textarea#inquiry', "テスト")
      .click('.nw-contactFormLabelInquiry')
      .assert.not.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      // companyがInvalidの場合
      .url('http://localhost:8080/contact')

      .setValue('input[type=text]#fullName', 'テスト')

      .click('.nw-contactFormLabelName')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#email', 'test@example.com')

      .click('.nw-contactFormLabelEmail')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#company', "a".repeat(101))

      .click('.nw-contactFormLabelCompany')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=radio]#inquiryTypes_1', ['checked', true])

      .setValue('textarea#inquiry', "テスト")
      .click('.nw-contactFormLabelInquiry')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      // inquiryがInvalidの場合
      .url('http://localhost:8080/contact')

      .setValue('input[type=text]#fullName', 'テスト')

      .click('.nw-contactFormLabelName')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#email', 'test@example.com')

      .click('.nw-contactFormLabelEmail')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#company', '株式会社テスト')

      .click('.nw-contactFormLabelCompany')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=radio]#inquiryTypes_1', ['checked', true])

      .setValue('textarea#inquiry', "")
      .click('.nw-contactFormLabelInquiry')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)
  },

  'フォーム送信UI': browser => {
    browser
      .url('http://localhost:8080/contact')
      .assert.not.elementPresent('.nw-contactThanksTitle')
      .assert.not.elementPresent('.nw-contactThanksText')
      .assert.not.elementPresent('.nw-contactThanksCautionText')
      .assert.not.elementPresent('.nw-contactSpinnerBlock')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#fullName', 'テスト')

      .click('.nw-contactFormLabelName')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#email', 'test@example.com')

      .click('.nw-contactFormLabelEmail')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=text]#company', '株式会社テスト')

      .click('.nw-contactFormLabelCompany')
      .assert.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .setValue('input[type=radio]#inquiryTypes_2', ['checked', true])

      .setValue('textarea#inquiry', "テスト")
      .click('.nw-contactFormLabelInquiry')
      .assert.not.attributeContains('.nw-contactFormSubmitBtn', 'disabled', true)

      .click('.nw-contactFormSubmitBtn')
      .assert.elementPresent('.nw-contactSpinnerBlock')
      .assert.elementPresent('.nw-contactThanksTitle')
      .assert.elementPresent('.nw-contactThanksText')
      .assert.elementPresent('.nw-contactThanksCautionText')
      .assert.not.elementPresent('.nw-contactSpinnerBlock')
  }
}
