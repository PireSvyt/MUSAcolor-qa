Feature: Patient - Perform Luscher 8 exam

    This feature is enabling to perform Luscher 8 exam

    Background:
        Given I sign in with credentials of 'practician exams'
        And I create a patient named 'luscher 8 exams patient'
        And I click new exam icon of patient exams
        And exam modal shall be visible
        And I select exam type 'Luscher 8' from the exam modal
        And I click proceed button of the exam modal

    # CORE CAPABILITIES
    @sanity
    Scenario: I can begin the test
        Then 'intro1' shall be the stage of the exam
    @sanity @todo
    Scenario: I can flip tiles
    @sanity @todo
    Scenario: I can finish the first test if all color tiles are flipped for the first row
    @sanity @todo
    Scenario: I can proceed to the second test
    @sanity @todo
    Scenario: I can finish the second test if all color tiles are flipped for the second row
    @sanity @todo
    Scenario: I can benefit from the analysis

    # REDUCED CAPABILITIES (for other features to simplify related scenari)
    @reducers
    Scenario: REDUCTION : I perform an exam of type Luscher 8
        Given 'intro1' shall be the stage of the exam
        And I perform an exam of type Luscher 8
        And I shall be on patient page for 'luscher 8 exams patient'
        And I shall find 1 exam in patient exams
        When I click the exam tile number 1
        Then 'analysis' shall be the stage of the exam
        And the Luscher 8 analysis shall be available

    # STANDARD CAPABILITIES
        