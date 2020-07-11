module.exports = {
  'お気に入りプロダクトページの角要素があること': browser => {
    browser
      .url('http://localhost:8080/products')
      .assert.visible('.nw-productsList')
    browser.elements('css selector', '.nw-productsListItem', (result) => {
      result.value.forEach(() => {
        browser
          .assert.visible('.nw-productsListTitle')
          .assert.visible('.nw-productsListCompany')
          .assert.visible('.nw-productsListText')
      })
    })
    browser.end()
  }
}
