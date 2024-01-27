const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")

setDefaultTimeout(scenari.timeout.helppage * 1000)

class HelpPage {

	// Page
	async assertHelpPageIsVisible() {
		const element = await global.page.getByTestId("page-help")
		await expect(element).toBeVisible()
	}
	async assertHelpPageIsHidden() {
		const element = await global.page.getByTestId("page-help")
		await expect(element).toBeHidden()
	}

}

module.exports = { HelpPage }

