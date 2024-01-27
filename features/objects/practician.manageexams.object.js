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
    /*
    async clickExamCallToAction(input) {
		await global.page.getByTestId("listitem-patient-click+"+input).click()
	}
    async clickExamMenuCallToAction(input) {
		await global.page.getByTestId("listitem-patient-menu+"+input).click()
	}
    async clickExamDeleteCallToAction(input) {
		await global.page.getByTestId("listitem-patient-menuitem-delete+"+input).click()
	}
    async clickExamDeleteConfirmCallToAction() {
		await global.page.getByTestId("modal-confirm-button-generic.button.proceed").click()
	}
    async clickExamDeleteCancelCallToAction() {
		await global.page.getByTestId("modal-confirm-button-generic.button.canceld").click()
	}
    */
    
    
    // Inputs
	async fillName(value) {
		await global.page.locator("data-testid=modal-exam-input-name >> input").fill(value)
	}
    
}

module.exports = { PracticianManageExam }
