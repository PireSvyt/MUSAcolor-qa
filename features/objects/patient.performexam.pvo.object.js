const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")

setDefaultTimeout(scenari.timeout.practician.manageexams * 1000)

class PatientPerformExamPVO {

    // State
    async assertStageIs(input) {
		const element = await global.page.getByTestId("page-exam-stage-" + input)
		await expect(element).toBeVisible()
	}
    async assertFinishCallToActionIsEnabled() {
		const element = await global.page.getByTestId("page-exam-button-finish")
		await expect(element).toBeEnabled()
	}
    async assertAnalysisIsAvailable() {
		const element = await global.page.getByTestId("page-exam-stage-analysis")
		await expect(element).toBeVisible()
	}
    

	// Clicks
	async clickBegin() {
		await global.page.getByTestId("page-exam-button-begin").click()
	}
	async clickTile(row,col) {
		await global.page.getByTestId("component-pvoexam-test-R-"+row+"-C-"+col).click()
	}
	async clickFinish() {
		await global.page.getByTestId("page-exam-button-finish").click()
	}
	async clickToAnalysis() {
		await global.page.getByTestId("page-exam-button-gotoanalysis").click()
	}
	async clickCloseIcon() {
		await global.page.getByTestId("component-app bar-button-close menu").click()
	}
    
}

module.exports = { PatientPerformExamPVO }
