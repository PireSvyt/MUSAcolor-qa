const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")

setDefaultTimeout(scenari.timeout.practician.manageexams * 1000)

class PracticianManageExam {

    // Modal
	async assertExamModalIsVisible() {
		const element = await global.page.getByTestId("modal-exam")
		await expect(element).toBeVisible()
	}
	async assertExamModalIsHidden() {
		const element = await global.page.getByTestId("modal-exam")
		await expect(element).toBeHidden()
	}
    
    // State
	async assertExamPageIsVisible() {
		const element = global.page.getByTestId("page-patient")
		await expect(element).toBeVisible()
	}
	async assertPatientExamsAreVisible() {
		const element = global.page.getByTestId("component-patient exams")
		await expect(element).toBeVisible()
	}
    async assertExamTypeIsSelected(input) {
		const element = global.page.getByTestId("modal-exam-select-examtype-"+input)
		await expect(element).toBeChecked()
	}

	// Clicks
	async clickNewExamCallToAction() {
		await global.page.getByTestId("component-patient exams-button-new exam").click()
	}
    async clickNewExamProceedCallToAction() {
		await global.page.getByTestId("modal-exam-button-proceed").click()
	}
    async clickNewExamCloseCallToAction() {
		await global.page.getByTestId("modal-exam-button-close").click()
	}
    
    // Select
    async selectExamType(examType) {
		await global.page.getByTestId("modal-exam-select-examtype-" + examType).click()
	}
    
}

module.exports = { PracticianManageExam }
