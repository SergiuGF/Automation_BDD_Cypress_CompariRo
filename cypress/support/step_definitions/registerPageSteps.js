import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('the user is on the Register Page', () => {
  cy.fixture('data.json').then((page) => {
  cy.visit(page.url.registerPage)
  })
})

// @Register1
When('the user inserts random email', () =>{
  cy.setRandomEmail();   
})
When('the user inserts a new password', () =>{
  cy.fixture('data.json').then((set) => {
  cy.get('[type="password"]').type(set.new.password)
  })
})
When('the user clicks on the register button', () =>{
  cy.get('#reg-submit').click()
})
Then('the success message is displayed', () => {
  cy.get('[class="col-lg-12 desc"]').should('be.visible')
})

// @Register2
// first two steps are in the previous scenario

When('the mail error message is displayed', () =>{
  cy.get('.error-message').should('be.visible');   
})

When('the mail error message contains "Completarea campului este obligatorie!"', () =>{
  cy.get('.error-message').should('contain.text', 'Completarea campului este obligatorie!');   
})

// @Register3
// first two steps are in the previous scenario

When('the password error message is displayed', () =>{
  cy.get('.error-message').should('be.visible');   
})

When('the password error message contains "Completarea campului este obligatorie!"', () =>{
  cy.get('.error-message').should('contain.text', 'Completarea campului este obligatorie!');   
})
