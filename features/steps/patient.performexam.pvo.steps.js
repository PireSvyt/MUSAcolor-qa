const { Given, When, Then } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")
const { PatientPerformExamPVO } = require("../objects/patient.performexam.pvo.object.js")

const patientPerformExamPVO = new PatientPerformExamPVO

// State
Then("the PVO analysis shall be available", async () => {
	await patientPerformExamPVO.assertAnalysisIsAvailable()
})


// Reductions
Given("I perform an exam of type PVO", async () => {
	await patientPerformExamPVO.assertStageIsIntro()
	await patientPerformExamPVO.clickBegin()
	await patientPerformExamPVO.assertStageIsTest()
    let r = 0
    let c = 0
    // New row
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c = 0
    r += 1
    // New row
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c = 0
    r += 1
    // New row
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c = 0
    r += 1
    // New row
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c = 0
    r += 1
    // New row
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c = 0
    r += 1
    // New row
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c = 0
    r += 1
    // New row
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c = 0
    r += 1
    // New row
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c = 0
    r += 1
    // New row
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c = 0
    r += 1
    // New row
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c = 0
    r += 1
    // New row
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c = 0
    r += 1
    // New row
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c += 1
	await patientPerformExamPVO.clickTile(r,c)
    c = 0
    r += 1
	await patientPerformExamPVO.assertFinishCallToActionIsEnabled()
	await patientPerformExamPVO.clickFinish()
	await patientPerformExamPVO.assertStageIsOutro()
	await patientPerformExamPVO.clickToAnalysis()
	await patientPerformExamPVO.assertStageIsAnalysis()
	await patientPerformExamPVO.clickCloseIcon()
})