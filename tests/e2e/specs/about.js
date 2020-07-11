module.exports = {
  'Aboutページのメッセージがあること': browser => {
    browser
      .url('http://localhost:8080/about')
      .assert.visible('.nw-firstText')
      .assert.visible('.nw-secondText')
      .assert.visible('.nw-thirdText')
      .assert.visible('.nw-forthText')
      .end()
  }
}
