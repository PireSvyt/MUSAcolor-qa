const { Given, When, Then } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")
const { PracticianManageExam } = require("../objects/practician.manageexams.object.js")

const practicianManageExam = new PracticianManageExam

// Modal
Then("exam modal shall be visible", async () => {
	await practicianManageExam.assertExamModalIsVisible()
})
Then("exam modal shall be hidden", async () => {
	await practicianManageExam.assertExamModalIsHidden()
})

// State
Then("patient exams shall be visible", async () => {
	await practicianManageExam.assertPatientExamsAreVisible()
})
Then("exam page shall be visible", async () => {
	await practicianManageExam.assertExamPageIsVisible()
})
Then("{string} exam type shall be selected from the exam modal", async (input) => {
	await practicianManageExam.assertExamTypeIsSelected(input)
})
Then("I shall find no exam in patient exams", async () => {
	await practicianManageExam.assertNoExamsAreVisible()
})
Then("I shall find {int} exam in patient exams", async (input) => {
	await practicianManageExam.assertNExamsAreVisible(input)
})
Then("{string} shall be the stage of the exam", async (input) => {
	await practicianManageExam.assertStageIs(input)
})
Then("exam analysis shall be accessible", async () => {
	await practicianManageExam.assertAnalysisIsAccessible()
})
Then("exam analysis shall not be accessible", async () => {
	await practicianManageExam.assertAnalysisIsNotAccessible()
})

// Clicks
When ("I click new exam icon of patient exams", async () => {
	await practicianManageExam.clickNewExamCallToAction()
})
When ("I click proceed button of the exam modal", async () => {
	await practicianManageExam.clickNewExamProceedCallToAction()
})
When("I click the exam tile number {int}", async (input) => {
	await practicianManageExam.clickExamTile(input)
})
When("I click the exam menu of exam tile number {int}", async (input) => {
	await practicianManageExam.clickExamMenuIcon(input)
})
When("I click the delete menu of exam tile number {int}", async (input) => {
	await practicianManageExam.clickExamDeleteMenuItem(input)
})
When("I click proceed button of the delete exam confirmation modal", async () => {
	await practicianManageExam.clickExamDeleteConfirm()
})

// Select
When ("I select exam type {string} from the exam modal", async (input) => {
	await practicianManageExam.selectExamType(input)
})