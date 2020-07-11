module.exports = {
  'クリックで各ページへ遷移できること': browser => {
    browser.init()
    browser.expect.element('.nw-globalNav').to.be.present
    browser.expect.elements('.nw-globalNavLink').count.to.equal(6)
    browser
      .click({selector: '.nw-globalNavLink', index: 1})
      .assert.urlEquals('http://localhost:8080/about')
      .assert.containsText('.nw-pageHeadingEn', 'ABOUT')
      .assert.containsText('.nw-pageHeadingJa', 'このサイトについて')

      .click({selector: '.nw-globalNavLink', index: 2})
      .assert.urlEquals('http://localhost:8080/profile')
      .assert.containsText('.nw-pageHeadingEn', 'PROFILE')
      .assert.containsText('.nw-pageHeadingJa', 'プロフィール')

      .click({selector: '.nw-globalNavLink', index: 3})
      .assert.urlEquals('http://localhost:8080/spec')
      .assert.containsText('.nw-pageHeadingEn', 'SPEC')
      .assert.containsText('.nw-pageHeadingJa', '仕様')

      .click({selector: '.nw-globalNavLink', index: 4})
      .assert.urlEquals('http://localhost:8080/products')
      .assert.containsText('.nw-pageHeadingEn', 'FAVORITE PRODUCTS')
      .assert.containsText('.nw-pageHeadingJa', 'お気に入りプロダクト')

      .click({selector: '.nw-globalNavLink', index: 5})
      .assert.urlEquals('http://localhost:8080/contact')
      .assert.containsText('.nw-pageHeadingEn', 'CONTACT')
      .assert.containsText('.nw-pageHeadingJa', 'お問い合わせ')

      .end()
  },

  'url直接アクセスで各ページへ遷移できること': browser => {
    browser
      .url('http://localhost:8080/about')
      .assert.containsText('.nw-pageHeadingEn', 'ABOUT')
      .assert.containsText('.nw-pageHeadingJa', 'このサイトについて')

      .url('http://localhost:8080/profile')
      .assert.containsText('.nw-pageHeadingEn', 'PROFILE')
      .assert.containsText('.nw-pageHeadingJa', 'プロフィール')

      .url('http://localhost:8080/spec')
      .assert.containsText('.nw-pageHeadingEn', 'SPEC')
      .assert.containsText('.nw-pageHeadingJa', '仕様')

      .url('http://localhost:8080/products')
      .assert.containsText('.nw-pageHeadingEn', 'FAVORITE PRODUCTS')
      .assert.containsText('.nw-pageHeadingJa', 'お気に入りプロダクト')

      .url('http://localhost:8080/contact')
      .assert.containsText('.nw-pageHeadingEn', 'CONTACT')
      .assert.containsText('.nw-pageHeadingJa', 'お問い合わせ')

      .end()
  },

  '404表示': browser => {
    browser
      .url('http://localhost:8080/unknown_path')
      .assert.containsText('.nw-pageHeadingEn', '404 NOT FOUND')
      .assert.containsText('.nw-pageHeadingJa', 'ページが見つかりません')

      .end()
  }
}
