import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('the user is on the Philips coffee machine product page', () => {
  cy.fixture('data.json').then((page) => {
  cy.visit(page.url.coffeMachinePage)
  })
})

// // @Cart1
// When('the user clicks on the first buy button', () => {
//    cy.get('.col-sm-5 .add-to-cart').click()
// })
// When('the user clicks on the second buy button', () => {
//    cy.get('.add-to-cart').last().click()
// })
// When('the user clicks on the to basket button', () => {
//   cy.get('#header-button-cart').click()
// })
// Then('the "EP2236/40" product is displayed', () => {
//   cy.get('div.container p:contains("{product}")').should('be.visible')
// })

// @Cart2
When('the user clicks on the cart button', () => {
    cy.get('#header-button-cart').click()
 })
Then('the user is redirected to the cart page', () => {
    cy.fixture('data.json').then((page) => {
        cy.url().should('include', page.url.cartPage)
      })
 })
Then('the empty cart message is displayed', () => {
  cy.get('.c-empty-cart__content__title').should('be.visible')
})
Then('the empty cart message contain text "In cosul Dvs deocamdata nu exista produse."', () => {
    cy.get('.c-empty-cart__content__title').should('contain.text', 'In cosul Dvs deocamdata nu exista produse.')
  })

//  When('the user is redirected to the cart page', () => {
//    cy.get('#header-button-cart').click()
//  })
//  Then('the "EP2236/40" product is displayed', () => {
//    cy.get('div.container p:contains("{product}")').should('be.visible')
//  })
