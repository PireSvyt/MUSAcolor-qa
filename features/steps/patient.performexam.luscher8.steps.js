const { Given, When, Then } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")
const { PatientPerformExamLuscher8 } = require("../objects/patient.performexam.luscher8.object.js")

const patientPerformExamLuscher8 = new PatientPerformExamLuscher8

// State
Then("the Luscher 8 analysis shall be available", async () => {
	await patientPerformExamLuscher8.assertAnalysisIsAvailable()
})
Then("{string} shall be the stage of the Luscher 8 exam", async (input) => {
	await patientPerformExamLuscher8.assertStageIs(input)
})


// Reductions
Given("I perform an exam of type Luscher 8", async () => {
	await patientPerformExamLuscher8.assertStageIs('intro1')
	await patientPerformExamLuscher8.clickBegin1()
	await patientPerformExamLuscher8.assertStageIs('test1')
    let r = 0
    let c = 0
    // First row
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    c = 0
    r += 1
    // Next stage
	await patientPerformExamLuscher8.assertNextCallToActionIsEnabled()
	await patientPerformExamLuscher8.clickNext()
	await patientPerformExamLuscher8.assertStageIs('intro2')
	await patientPerformExamLuscher8.clickBegin2()
	await patientPerformExamLuscher8.assertStageIs('test2')
    // Next test
    // Second row
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    c += 1
	await patientPerformExamLuscher8.clickTile(r,c)
    //
	await patientPerformExamLuscher8.assertFinishCallToActionIsEnabled()
	await patientPerformExamLuscher8.clickFinish()
	await patientPerformExamLuscher8.assertStageIs('outro')
	await patientPerformExamLuscher8.clickToAnalysis()
	await patientPerformExamLuscher8.assertStageIs('analysis')
	await patientPerformExamLuscher8.clickCloseIcon()
})