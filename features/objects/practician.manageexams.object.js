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
		const element = await global.page.getByTestId("page-patient")
		await expect(element).toBeVisible()
	}
	async assertPatientExamsAreVisible() {
		const element = await global.page.getByTestId("component-patient exams")
		await expect(element).toBeVisible()
	}
    async assertExamTypeIsSelected(input) {
		const element = await global.page.getByTestId("modal-exam-select-examtype-"+input)
		await expect(element).toBeChecked()
	}
    async assertNoExamsAreVisible() {
		await expect(await global.page.getByTestId("component-exam card").count()).toBe(0)
	}
    async assertNExamsAreVisible(input) {
		await expect(await global.page.getByTestId("component-exam card").count()).toBe(input)
	}
    async assertStageIs(input) {
        const element = await global.page.getByTestId("page-exam-stage-" + input)
        await expect(element).toBeVisible()
    }
    async assertAnalysisIsAccessible() {
        const element = await global.page.getByTestId("page-exam-label-deniedaccess")
		await expect(element).toBeHidden()
	}
    async assertAnalysisIsNotAccessible() {
        const element = await global.page.getByTestId("page-exam-label-deniedaccess")
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
    async clickExamTile(input) {
		await global.page.getByTestId("listitem-exam-click+" + (input-1)).click()
	}
    async clickExamMenuIcon(input) {
		await global.page.getByTestId("listitem-exam-menu+" + (input-1)).click()
	}
    async clickExamDeleteMenuItem(input) {
		await global.page.getByTestId("listitem-exam-menuitem-delete+" + (input-1)).click()
	}
    async clickExamDeleteConfirm() {
		await global.page.getByTestId("modal-confirm-button-generic.button.proceed").click()
	}
    async clickExamDeleteCancel() {
		await global.page.getByTestId("modal-confirm-button-generic.button.cancel").click()
	}
    
    // Select
    async selectExamType(examType) {
		await global.page.getByTestId("modal-exam-select-examtype-" + examType).click()
	}
    
}

module.exports = { PracticianManageExam }
