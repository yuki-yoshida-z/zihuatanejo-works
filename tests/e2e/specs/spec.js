module.exports = {
  'Specページの各要素があること': browser => {
    browser
      .url('http://localhost:8080/spec')
      .assert.visible('.nw-specHeaderTitle')
      .assert.containsText(".nw-specHeaderTitle", "スキルセット")
      .assert.visible('.nw-specProgrammingChart')
      .assert.visible('.nw-specDirectionChart')
      .assert.visible('.nw-specBodyTitle')
      .assert.containsText(".nw-specBodyTitle", "使用技術・ツール")
      .assert.elementPresent('.nw-specBody input')
      .assert.elementPresent('.nw-specBody table')
      .assert.visible('.nw-specBodyPagenationBlock')
      .end()
  }
}
