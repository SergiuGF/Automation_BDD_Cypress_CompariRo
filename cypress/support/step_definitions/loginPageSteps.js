import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the Login Page', () => {
  cy.fixture('data.json').then((page) => {
  cy.visit(page.url.loginPage)
  })
})

// @Login1
When('User inserts email {string} in the email input', (invalid_email) => {
  if (invalid_email !== "N/A") {
    cy.get('[type="email"]').type(invalid_email)
  }
})
When('User inserts a password {string} in the password input', (password) => {
  cy.get('[data-placeholder="Parola"]').type(password)
})
When('User click on the login button', () => {
  cy.get('#login-submit').click()
})
Then('The error message is displayed', () => {
  cy.get('.error-message').should('be.visible')
})
Then('The error message contains {string} text', (error_msg_text) => {
  cy.get('.error-message').should('contain.text', error_msg_text)
})

// @Login2
When('User inserts valid email in the email input', () => {
  cy.fixture('data.json').then((account) => {
    cy.get('[type="email"]').type(account.valid.email)
  }) 
})
When('User inserts a valid password in the password input', () => {
  cy.fixture('data.json').then((account) => {
    cy.get('[data-placeholder="Parola"]').type(account.valid.password)
  })  
})

// next step is the same as in the previous scenario

Then('I am redirected to account page', () => {
  cy.fixture('data.json').then((page) => {
    cy.url().should('include', page.url.accountPage)
  })
})

























// Given('I am in login page', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com')
//   })

// When('I enter valid username and password', () => {
//   cy.fixture('users.json').then((users) => {
//     cy.get('input[name=username]').type(users.valid.username)
//     cy.get('input[name=password]').type(users.valid.password)
//   })
// })

// When('I click on login button' , () => {
//    cy.get('button[type=submit]').click()
// })

// Then('I should logged in and redirected to dashboard page', () => {
//   cy.get('p.oxd-userdropdown-name').should('be.visible')
// })

// When ('I enter invalid username and password', () => {
//   cy.fixture('users.json').then((users) => {
//     cy.get('input[name=username]').type(users.invalid.username)
//     cy.get('input[name=password]').type(users.invalid.password)
//   })
// })

// Then('I should see invalid credentials message', () => {
//   cy.contains('Invalid credentials').should('be.visible')
// })






// When('I enter {string} in username field', (username) => {
//     cy.get('input[name=username]').type(username)
// })

// When('I enter {string} in password field', (password) => {
//     cy.get('input[name=password]').type(password)
// })

// When('I enter {int} in password field', (password) => {
//     cy.get('input[name=password]').type(password)
// })
// When(/I enter "(.*)" in (username|password) field/, (text, field) => {
//     cy.get(`input[name=${field}]`).type(text)
// })

