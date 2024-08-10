Feature: Registration page

    # Scenario: Positive Scenario Registration
    #     Given I open the registration page
    #     When I fill in the registration form with data from "Registration.xlsx"
    #     And I submit the form
    #     Then I should see the registration confirmation


      Scenario: Positive Scenario Registration
        Given I open the registration page
        When I fill in the registration form with data from "Registration.xlsx"
        And I submit the form
        Then I should see the registration confirmation