const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")

setDefaultTimeout(scenari.timeout.practician.managepatients * 1000)

class PracticianManagePatient {

    // Modal
	async assertPatientModalIsVisible() {
		const element = await global.page.getByTestId("modal-patient")
		await expect(element).toBeVisible()
	}
	async assertPatientModalIsHidden() {
		const element = await global.page.getByTestId("modal-patient")
		await expect(element).toBeHidden()
	}
    
    // State
	async assertIsOneOfMyPatients(input) {
		const element = await global.page.getByText(input)
		await expect(element.first()).toBeVisible()
	}
    async assertIsNotOneOfMyPatients(input) {
		const element = await global.page.getByText(input)
		await expect(element).toBeHidden()
	}
    async assertIAmOnPatientPage() {
		const element = await global.page.getByTestId("page-patient")
		await expect(element).toBeVisible()
	}    
    async assertIAmOnThisPatientPage(input) {
		const element = await global.page.getByTestId("page-patient-label-patientname").getByText(input)
		await expect(element).toBeVisible()
	}    
    async assertDuplicatedNameIsVisible() {
		const element = await global.page.getByTestId("page-patient-label-duplicatedpatientname")
		await expect(element).toBeVisible()
	}    

	// Clicks
	async clickNewPatientCallToAction() {
		await global.page.getByTestId("component-my patients-button-new patient").click()
	}
    async clickNewPatientProceedCallToAction() {
		await global.page.getByTestId("modal-patient-button-proceed").click()
	}
    async clickNewPatientCloseCallToAction() {
		await global.page.getByTestId("modal-patient-button-close").click()
	}
    async clickPatientCallToAction(input) {
		await global.page.getByTestId("listitem-patient-click+"+input).click()
	}
    async clickPatientMenuCallToAction(input) {
		await global.page.getByTestId("listitem-patient-menu+"+input).click()
	}
    async clickPatientDeleteCallToAction(input) {
		await global.page.getByTestId("listitem-patient-menuitem-delete+"+input).click()
	}
    async clickPatientDeleteConfirmCallToAction() {
		await global.page.getByTestId("modal-confirm-button-generic.button.proceed").click()
	}
    async clickPatientDeleteCancelCallToAction() {
		await global.page.getByTestId("modal-confirm-button-generic.button.cancel").click()
	}
    
    
    // Inputs
	async fillName(value) {
		await global.page.locator("data-testid=modal-patient-input-name >> input").fill(value)
	}
    
}

module.exports = { PracticianManagePatient }