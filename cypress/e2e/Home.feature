Feature: Test the functionality of the Home Page and of the associated functions

  Background: Open Home Page
    Given the user is on the Home Page

   @Search
   Scenario: Check that the user gets at least 10 results when searching for "Samsung Galaxy tablet"
     When the user clicks on the search bar and inserts "Samsung Galaxy tablet" text
     When the user clicks on the search button
     Then at least 10 products are displayed

   @Filter
   Scenario: Check the functionality of the Filter feature
     When the user clicks on the Mobile phones - under Electronics tab   
     When the user clicks on Individual values - under Price tab
     When the user sets the min value at "1000"
     When the user sets the max value at "2000"
     When the user clicks on ok button - under Price tab
     Then all the products displayed are between "1000" and "2000" lei

    @Test_URL
    Scenario: Check the functionality of the redirection to the Cart Page
       When the user clicks on the Cart button
       Then the user is redirected to the Cart Page

    @Comparatie
   Scenario: Check the functionality of the comparison button
      When the user clicks on the aparat foto button
      When the user clicks on the first compare checkbox
      When the user clicks on the comparison button
      Then the selected product is displayed
    