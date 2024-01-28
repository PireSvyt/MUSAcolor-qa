Feature: Authent

    This feature provides a secured access to the product

    Background:
        Given I open Landing page without being signed in
        And I click sign in button of the landing page

    # CORE CAPABILITIES
    @sanity
    Scenario: Sign in modal is visible and can be closed
        Then sign in modal shall be visible
        And I close the sign in modal
        And sign in modal shall be hidden
    @sanity
    Scenario: Sign in modal grants access with valid credentials
        Given I fill login of sign in modal with 'practician A'
        And I fill password of sign in modal with 'practician A'
        When I click proceed button of the sign in modal
        Then sign in modal shall be hidden
        And I shall be logged in
    @sanity
    Scenario: Sign in modal denies access with invalid credentials
        Given I fill login of sign in modal with 'practician A'
        And I fill password of sign in modal with 'random practician'
        When I click proceed button of the sign in modal
        Then sign in modal shall be visible
    @sanity
    Scenario: I can sign out
        Given I sign in with credentials of 'practician A'
        When I sign out
        Then I shall be signed out

    # REDUCED CAPABILITIES (for other features to simplify related scenari)
    @reducers
    Scenario: REDUCTION : I open Landing page being signed in
        Given I open Landing page being signed in
        Then I shall be logged in
    @reducers
    Scenario: REDUCTION : I sign in with credentials of {sgtring}
        Given I sign in with credentials of 'practician A'
        Then I shall be logged in

    # STANDARD CAPABILITIES
    @standard
    Scenario: Sign in modal provides feedback when proceeding without credentials
        When I click proceed button of the sign in modal
        Then sign in modal shall be visible
        And 'login' field from sign in modal shall in error
        And 'password' field from sign in modal shall in error        
    @standard
    Scenario: Sign in modal provides feedback when proceeding with invalid credentials
        Given I fill login of sign in modal with 'practician A'
        And I fill password of sign in modal with 'random practician'
        When I click proceed button of the sign in modal
        Then sign in modal shall be visible
        And 'password' field from sign in modal shall in error
        And password reset button from sign in modal shall be visible  
    @standard
    Scenario: Sign in modal provides feedback when proceeding with unknown login
        Given I fill login of sign in modal with 'random practician'
        And I fill password of sign in modal with 'random practician'
        When I click proceed button of the sign in modal
        Then sign in modal shall be visible
        And 'login' field from sign in modal shall in error