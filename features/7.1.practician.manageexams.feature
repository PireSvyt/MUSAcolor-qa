Feature: Practician - Manage exams

    This feature enables practicians to create, get and delete exams for patients

    Background:
        Given I sign in with credentials of 'practician exams'

    # CORE CAPABILITIES
    @sanity
    Scenario: I have access to patient exam list
        Given I create a patient named 'exam patient'
        Then patient exams shall be visible
    @sanity
    Scenario: I can select the exam to perform
        Given I click the patient tile of 'exam patient'
        And I shall be on patient page for 'exam patient'
        And I click new exam icon of patient exams
        And exam modal shall be visible
        When I select exam type 'Luscher 8' from the exam modal
        Then 'Luscher 8' exam type shall be selected from the exam modal
        When I select exam type 'PVO' from the exam modal
        Then 'PVO' exam type shall be selected from the exam modal
    @sanity
    Scenario: I can close an ongoing exam
        Given I click the patient tile of 'exam patient'
        And I shall be on patient page for 'exam patient'
        And I click new exam icon of patient exams
        And exam modal shall be visible
        And I select exam type 'PVO' from the exam modal
        And I click proceed button of the exam modal
        When I click the app close icon
        Then I shall be on patient page for 'exam patient'
        And I shall find no exam in patient exams
    @sanity
    Scenario: I can create a new exam
        Given I click the patient tile of 'exam patient'
        And I shall be on patient page for 'exam patient'
        And I click new exam icon of patient exams
        And exam modal shall be visible
        And I select exam type 'PVO' from the exam modal
        And I click proceed button of the exam modal
        When I perform an exam of type PVO
        Then I shall be on patient page for 'exam patient'
        And I shall find 1 exam in patient exams
    @sanity
    Scenario: I can navigate to an existing exam
        Given I click the patient tile of 'exam patient'
        And I shall be on patient page for 'exam patient'
        And I shall find 1 exam in patient exams
        When I click the exam tile number 1
        Then 'analysis' shall be the stage of the exam
        And exam analysis shall be accessible
    @sanity
    Scenario: I can delete an existing exam
        Given I click the patient tile of 'exam patient'
        And I shall be on patient page for 'exam patient'
        And I shall find 1 exam in patient exams
        When I click the exam menu of exam tile number 1
        And I click the delete menu of exam tile number 1
        And I click proceed button of the delete exam confirmation modal
        And I navigate to 'home' page
        Given I click the patient tile of 'exam patient'
        And I shall be on patient page for 'exam patient'
        Then I shall find no exam in patient exams

    # REDUCED CAPABILITIES (for other features to simplify related scenari)
    @reducers @todo
    Scenario: REDUCTION : I create an exam of type {string}
    @reducers @todo
    Scenario: REDUCTION : I delete an exam for the {date}

    # STANDARD CAPABILITIES
        