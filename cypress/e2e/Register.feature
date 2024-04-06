Feature: Test the functionality of the Register Page

  Background: Open Register Page
    Given the user is on the Register Page

   @Register1
   Scenario: Check that success message is displayed when the user registers with a new email
     When the user inserts random email
     When the user inserts a new password
     When the user clicks on the register button
     Then the success message is displayed

     @Register2
   Scenario: Check that the error message is displayed when the user leaves the email input empty
    When the user inserts a new password
    When the user clicks on the register button
    Then the mail error message is displayed
    Then the mail error message contains "Completarea campului este obligatorie!"

    @Register3
   Scenario: Check that error message is displayed when the user leaves the password input empty
    When the user inserts random email
    When the user clicks on the register button
    Then the password error message is displayed
    Then the password error message contains "Completarea campului este obligatorie!"