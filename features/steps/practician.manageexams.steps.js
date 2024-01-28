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

// Clicks
When ("I click new exam icon of patient exams", async () => {
	await practicianManageExam.clickNewExamCallToAction()
})
When ("I click proceed button of the exam modal", async () => {
	await practicianManageExam.clickNewExamProceedCallToAction()
})

// Select
When ("I select exam type {string} from the exam modal", async (input) => {
	await practicianManageExam.selectExamType(input)
})