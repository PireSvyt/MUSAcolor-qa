Feature: Tenancy

    # This feature provides ensures that data are seggregated per user
    # In this case, user are practicians

    # CORE CAPABILITIES
    @sanity
    Scenario: Patients from practician A are not accessible by practician B
        Given I sign in with credentials of 'practician A'
        And I create a patient named 'tenancy patient A'
        And I navigate to 'home' page
        And I sign out
        When I sign in with credentials of 'practician B'
        Then 'tenancy patient A' shall not be part of my patients
    @sanity  @todo
    Scenario: Exams related to patients from practician A are not accessible by practician B
        Given I sign in with credentials of 'practician A'
        When I click the patient tile of 'tenancy patient A'
        And I create an exam of type 'PVO'
        And I perform an exam of type PVO
        When I click the app close icon
        And I navigate to exam page with url
        And exam analysis shall be accessible
        When I click the app close icon
        And I sign out
        When I sign in with credentials of 'practician B'
        And I navigate to exam page with url
        Then exam analysis shall not be accessible

    # REDUCED CAPABILITIES (for other features to simplify related scenari)

    # STANDARD CAPABILITIES
        