Feature: Authent - Sign out

    Background:
        Given I open Landing page being signed in

    # CORE CAPABILITIES
    Scenario: I can sign out
        When I sign out
        Then I should be signed out

    # REDUCED CAPABILITIES (for other features to simplify related scenari)

    # STANDARD CAPABILITIES

        