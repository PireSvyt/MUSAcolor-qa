Feature: Patient - Perform PVO exam

    This feature is enabling to perform PVO exam

    Background:
        Given I sign in with credentials of 'practician exams'
        And I create a patient named 'PVO exams patient'
        And I click new exam icon of patient exams
        And exam modal shall be visible
        And I select exam type 'PVO' from the exam modal
        And I click proceed button of the exam modal

    # CORE CAPABILITIES
    @sanity
    Scenario: I can begin the test
        Then 'intro' shall be the stage of the exam
    @sanity @todo
    Scenario: I can flip tiles
    @sanity @todo
    Scenario: I can finish the test if 4 color tiles per row are flipped
    @sanity @todo
    Scenario: I can benefit from the analysis

    # REDUCED CAPABILITIES (for other features to simplify related scenari)
    @reducers
    Scenario: REDUCTION : I perform an exam of type PVO
        Given 'intro' shall be the stage of the exam
        And I perform an exam of type PVO
        And I shall be on patient page for 'PVO exams patient'
        And I shall find 1 exam in patient exams
        When I click the exam tile number 1
        Then 'analysis' shall be the stage of the exam
        And the PVO analysis shall be available

    # STANDARD CAPABILITIES
    @standard @todo
    Scenario: I can't flip more than 4 color tiles per row in PVO exam
        