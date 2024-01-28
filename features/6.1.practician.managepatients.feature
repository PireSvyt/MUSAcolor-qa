Feature: Practician - Manage patients

    # This feature enables practicians to create, get and delete patients

    Background:
        Given I sign in with credentials of 'practician patients'

    # CORE CAPABILITIES
    @sanity @todo
    Scenario: I have access to my patient list
    @sanity
    Scenario: I can create a new patient
        Given I click new patient icon of my patients
        And patient modal shall be visible
        And I fill name of patient modal with 'New patient'
        And I click proceed button of the patient modal
        And I navigate to 'home' page
        Then 'New patient' shall be part of my patients
    @sanity
    Scenario: I can navigate to an existing patient
        Given 'New patient' shall be part of my patients
        When I click the patient tile of 'New patient'
        And I shall be on patient page for 'New patient'
    @sanity
    Scenario: I can delete an existing patient
        Given 'New patient' shall be part of my patients
        When I click patient menu of 'New patient'
        And I click delete patient from patient menu of 'New patient'
        And I click proceed button of the delete patient confirmation modal
        Then 'New patient' shall not be part of my patients

    # REDUCED CAPABILITIES (for other features to simplify related scenari)
    @reducers
    Scenario: REDUCTION : I create a patient named {string}
        Given I create a patient named 'patient reduction'
        And I shall be on patient page for 'patient reduction'
        And I navigate to 'home' page
        Then 'patient reduction' shall be part of my patients
    @reducers
    Scenario: REDUCTION : I delete a patient named {string}
        Given I delete a patient named 'patient reduction'
        Then 'patient reduction' shall not be part of my patients

    # STANDARD CAPABILITIES
    @standard
    Scenario: I can't create a patient with an existing name
        Given I create a patient named 'patient duplicate'
        And I navigate to 'home' page
        And I click new patient icon of my patients
        And patient modal shall be visible
        And I fill name of patient modal with 'patient duplicate'
        When I click proceed button of the patient modal
        Then duplicated patient name warning shall be visible
        
