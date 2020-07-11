module.exports = {
  'Topページのメッセージがあること': browser => {
    browser
      .init()
      .assert.urlEquals('http://localhost:8080/')
      .assert.visible('.nw-msgFirstLine')
      .assert.containsText('.nw-msgFirstLine', 'LET ME HELP YOU')
      .assert.visible('.nw-msgSecondLine')
      .assert.containsText('.nw-msgSecondLine', 'with YOUR')
      .assert.visible('.nw-msgThirdLine')
      .assert.containsText('.nw-msgThirdLine', 'INNOVATION')
      .end()
  }
}
