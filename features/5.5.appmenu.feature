Feature: App menu

    This feature provides a menu to navigate through the app

    # CORE CAPABILITIES
    @sanity @todo
    Scenario: The app menu allows to go to help page for visitors
        Given I open Landing page without being signed in
        And I click the app menu icon
        When I click the app menu item 'help'
        Then help page shall be visible
    @sanity @todo
    Scenario: The app menu allows to sign out
        Given I sign in with credentials of 'practician A'
        And I click the app menu icon
        When I click the app menu item 'signout'
        Then I shall be signed out
    @sanity @todo
    Scenario: The app menu allows to go to home from patient page
        Given I sign in with credentials of 'practician A'
        And I create a patient named 'appmenu patient'
        Then I shall be on patient page for 'appmenu patient'
        And I click the app menu icon
        When I click the app menu item 'home'
        Then I shall be on home page
        And I delete a patient named 'appmenu patient'

    # REDUCED CAPABILITIES (for other features to simplify related scenari)
    @reducers @todo
    Scenario: REDUCTION : I navigate to {string} page
        Given I open Landing page without being signed in
        When I navigate to 'help' page
        Then help page shall be visible

    # STANDARD CAPABILITIES
    @standard @todo
    Scenario: The app menu allows to go to admin page for admin
        