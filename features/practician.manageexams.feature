Feature: Practician - Manage exams

    # This feature enables practicians to create, get and delete exams for patients

    Background:
        Given I sign in with credentials of 'practician A'
        And I create a patient named 'exam patient'

    # CORE CAPABILITIES
    @sanity
    Scenario: I have access to patient exam list
        Then patient exams shall be visible
    @sanity @todo
    Scenario: I can select the exam to perform
    @sanity
    Scenario: I can close an ongoing exam
        Given I click new exam icon of patient exams
        And exam modal shall be visible
        And I click proceed button of the exam modal
        When I click the app close icon
        Then I shall be on patient page for 'exam patient'
        And I shall not find a recent exam in patient exams
    @sanity
    Scenario: I can create a new exam
        Given I click new exam icon of patient exams
        And exam modal shall be visible
        And I click proceed button of the exam modal
        When I perform an exam of type PVO
        Then I shall be on patient page for 'exam patient'
        And I shall find a recent exam in patient exams
    @sanity
    Scenario: I can navigate to an existing exam
        When I click the first exam tiles
        Then the exam analysis shall be visible // page-exam ++
    @sanity
    Scenario: I can delete an existing exam
        When I click the exam menu of the first exam tiles
        And I click the delete exam from exam menu of first exam tiles
        And I click proceed button of the delete exam confirmation modal
        Then 'New patient' shall not be part of my patients
        And I shall not find a recent exam in patient exams

    # REDUCED CAPABILITIES (for other features to simplify related scenari)
    @reducers @todo
    Scenario: REDUCTION : I create an exam of type {string}
    @reducers @todo
    Scenario: REDUCTION : I delete an exam for the {date}

    # STANDARD CAPABILITIES
        