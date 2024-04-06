import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('the user is on the Home Page', () => {
  cy.fixture('data.json').then((page) => {
  cy.visit(page.url.homePage)
  })
})

// @Search
When('the user clicks on the search bar and inserts "Samsung Galaxy tablet" text', () => {
   cy.get('.c-search__input').click().type('Samsung Galaxy tablet')
})
When('the user clicks on the search button', () => {
  cy.get('.c-search__button').click()
})
Then('at least 10 products are displayed', () => {
  cy.get('.product-box-container').should('have.length.at.least', 10)
})

// @Filter
When('the user clicks on the Mobile phones - under Electronics tab', () => {
    cy.get('[title="Telefoane mobile"]').click()
 })
 When('the user clicks on Individual values - under Price tab', () => {
    cy.get('span.customText').contains('Valori individuale').click()
 })
 When('the user sets the min value at "1000"', () => {
    cy.get('[name="pret_minValue"]').type('1000')
 })
 When('the user sets the max value at "2000"', () => {
    cy.get('[name="pret_maxValue"]').type('2000')
 })
 When('the user clicks on ok button - under Price tab', () => {
    cy.wait(4000);  
    cy.get('#cv_pret .input-group-btn').click();
    // Se așteaptă 2-3 secunde înainte de a continua
    cy.wait(4000); // sau cy.wait(3000) pentru a aștepta 3 secunde
})
Then('all the products displayed are between "1000" and "2000" lei', () => {
   // Selectați toate elementele cu clasa 'price' și setați timeout-ul
   cy.get('a.price').each(($element) => {
       // Blocul each() va beneficia acum de timeout-ul setat înainte de a începe să interacționeze cu fiecare element

       // Colectați textul pentru fiecare preț
       const priceText = $element.text();

       // Eliminați caracterele non-numerice din preț și păstrați doar cifrele și virgulele
       const numericPriceText = priceText.replace(/[^\d,]/g, '');

       // Eliminați tot ce este după virgulă, luând doar partea întreagă a prețului
       const priceWithoutDecimals = numericPriceText.split(',')[0];

       // Transformați prețul în formatul integer
       const price = parseInt(priceWithoutDecimals);

       // Verificați dacă prețul este între 1000 și 2000
       cy.wrap(price).should('be.gte', 1000); // Mai mare sau egal cu 1000
       cy.wrap(price).should('be.lte', 2000); // Mai mic sau egal cu 2000

       // Afișați prețurile în consolă pentru a le verifica
       cy.log(`Price: ${price}`);
   });
});

// @Test_URL
When('the user clicks on the Cart button', () => {
   cy.get('#header-cart-icon > svg').click()
})

Then('the user is redirected to the Cart Page', () => {
   cy.fixture('data.json').then((page) => {
      cy.url().should('include', page.url.cartPage)
    })
})

// @Test_URL
When('the user clicks on the aparat foto button', () => {
   cy.get('[title="Aparat foto"]').click()
})
When('the user clicks on the first compare checkbox', () => {
   cy.get('.add-to-compare').first().click()
})
When('the user clicks on the comparison button', () => {
   cy.get('#header-button-comparison').click()
})

Then('the selected product is displayed', () => {
   cy.get('.product').should('be.visible')
})
