module.exports = {
  'Companyページのメッセージがあること': browser => {
    browser
      .url('http://localhost:8080/company')
      .assert.visible('.nw-companyInfoList')
      .assert.visible('.mw-companyInfoName')
      .assert.visible('.mw-companyInfoStart')
      .assert.visible('.mw-companyInfoUrl')
      .assert.visible('.mw-companyInfoPresident')
      .end()
  }
}
