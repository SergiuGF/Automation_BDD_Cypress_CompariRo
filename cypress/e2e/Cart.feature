Feature: Test the functionality of the Cart Page

  Background: Open "Philips EP2236/40" coffee machine product Page
    Given the user is on the Philips coffee machine product page

#    @Cart1
#    Scenario: Check the functionality of the buy button
#      When the user clicks on the first buy button
#      When the user clicks on the second buy button
#      When the user clicks on the to basket button
#      Then the "EP2236/40" product is displayed

   @Cart2
   Scenario: Check the functionality of the cart button
     When the user clicks on the cart button
     Then the user is redirected to the cart page
     Then the empty cart message is displayed
     Then the empty cart message contain text "In cosul Dvs deocamdata nu exista produse."
    
