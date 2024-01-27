const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")

setDefaultTimeout(scenari.timeout.authent * 1000)

class Authent {
	
	// States
	async assertIAMLoggedIn() {
		const element = await global.page.getByTestId("component-my patients")
		await expect(element).toBeVisible()
	}
    async assertIAMLoggedOut() {
        const element = await global.page.getByTestId("component-my patients")
        await expect(element).toBeHidden()
    }  

	// Page
	async navigateToPage() {
		await global.page.goto(scenari.paths["root"]+scenari.paths["landing"])
	}
	async assertSignInCallToActionIsVisible() {
		const element = await global.page.getByTestId("page-landing-button-sign in")
		await expect(element).toBeVisible()
	}	

	// Modal
	async assertSignInModalIsVisible() {
		const element = await global.page.getByTestId("modal-sign in")
		await expect(element).toBeVisible()
	}
	async assertSignInModalIsHidden() {
		const element = await global.page.getByTestId("modal-sign in")
		await expect(element).toBeHidden()
	}

	// Clicks
	async clickSignInCallToAction() {
		await global.page.getByTestId("page-landing-button-sign in").click()
	}
	async clickProceedCallToAction() {
		await global.page.getByTestId("modal-sign in-button-proceed").click()
	}
	async clickCloseCallToAction() {
		await global.page.getByTestId("modal-sign in-button-close").click()
	}

    // Inputs
	async fillLogin(value) {
		await global.page.locator("data-testid=modal-sign in-input-login >> input").fill(scenari.accounts[value].login)
	}
	async fillPassword(value) {
		await global.page.locator("data-testid=modal-sign in-input-password >> input").fill(scenari.accounts[value].password)
	}

	// Actions
	async logOut() {
        await global.page.getByTestId("component-app bar-button-open menu").click()
        await global.page.getByTestId("list-app bar menu-listitem-signout").click()
	}
    
}

module.exports = { Authent }