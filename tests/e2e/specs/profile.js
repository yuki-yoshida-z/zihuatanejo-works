module.exports = {
  'Profileページのメッセージがあること': browser => {
    browser
      .url('http://localhost:8080/profile')
      .assert.visible('.nw-profileHeaderImg')
      .assert.visible('.nw-profileHandleName')
      .assert.visible('.nw-profileJob')
      .assert.visible('.nw-profileAge')
      .assert.visible('.nw-profileArea')
      .assert.visible('.nw-profileHobby')
      .assert.visible('.nw-profileLink')
      .assert.visible('.nw-profileIntro')
      .end()
  }
}
