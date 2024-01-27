Feature: Intro

    # This feature enables to check all inputs are all set 
    # and to prepare the database for test purpose

    # Check environment variables

    Scenario: Check environment inputs
        Then admin command environment variables are available

    # Prepare database

    Scenario: Drop exmas
        Given admin command is fired to drop 'exams'

    Scenario: Drop patients
        Given admin command is fired to drop 'patients'
        