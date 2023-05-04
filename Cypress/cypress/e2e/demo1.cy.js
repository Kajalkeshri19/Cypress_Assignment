describe("First Test", function() {

it("End to End Testing", function()
{
  cy.viewport(1920,1080),
  cy.visit("https://www.myntra.com",
  {
  headers: { "Accept-Encoding": "gzip, deflate" }
  })
  cy.get('.desktop-searchBar').type("HandBag")
  cy.get('.desktop-submit').click()
  cy.get('.product-base > a').invoke("removeAttr","target").eq(0).click()
  cy.get('.pdp-add-to-bag.pdp-button.pdp-flex.pdp-center').should('be.visible').click()
  cy.get('.pdp-goToCart.pdp-add-to-bag.pdp-button.pdp-flex.pdp-center span').eq(0).should('contain.text','GO TO BAG').click()
  cy.get('.css-etguer').click({force:true})
  
  })
})
