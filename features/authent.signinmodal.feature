Feature: Authent - Sign in modal

    Background:
        Given I open Landing page without being signed in
        And I click sign in button of the landing page

    # CORE CAPABILITIES
    @sanity
    Scenario: Sign in modal is visible and can be closed
        Then sign in modal should be visible
        And I close the sign in modal
        And sign in modal should be hidden

    @sanity
    Scenario: Sign in modal grants access with valid credentials
        Given I fill login of sign in form with 'practician A'
        And I fill password of sign in form with 'practician A'
        When I click sign in button of the sign in modal
        Then sign in modal should be hidden
        And I should be logged in
    @sanity
    Scenario: Sign in modal denies access with invalid credentials
        Given I fill login of sign in form with 'practician A'
        And I fill password of sign in form with 'random practician'
        When I click continue button of the sign in form
        Then password field should be visible

    # REDUCED CAPABILITIES (for other features to simplify related scenari)
    @reducers
    Scenario: REDUCTION : I open Landing page being signed in
        Given I open Landing page being signed in
        Then I should be logged in

    @reducers
    Scenario: REDUCTION : I sign in with credentials of {sgtring}
        Given I sign in with credentials of 'practician A'
        Then I should be logged in

    # STANDARD CAPABILITIES
    @standard
    Scenario: Sign in form denies access without credentials
        When I click continue button of the sign in form
        Then sign in form should be visible

        