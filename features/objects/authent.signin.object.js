const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")

setDefaultTimeout(scenari.authent.signin.timeout * 1000)

class SigninObject {

	// Page
	async navigateToPage() {
		await global.page.goto(scenari.paths["root"]+scenari.paths["landing"])
	}

	// Login
	//<form method="POST" class="cb24974bd _form-login-id" data-form-primary="true">
	async assertLoginIsVisible() {
		const element = await global.page.locator("//form[contains(@class, '_form-login-id')]")
		await expect(element).toBeVisible()
	}
	async assertLoginIsHidden() {
		const element = await global.page.locator("//form[contains(@class, '_form-login-id')]")
		await expect(element).toBeHidden()
	}
	async assertPasswordIsVisible() {
		const element = await global.page.locator("//input[contains(@name, 'passwd')]")
		await expect(element).toBeVisible()
	}
	async assertPasswordIsHidden() {
		const element = await global.page.locator("//input[contains(@name, 'passwd')]")
		await expect(element).toBeHidden()
	}
    async assertIAMLoggedIn() {
        const element = await global.page.locator("//p[contains(@data-testid, 'LogoBlock-productName')]")
		await expect(element).toBeVisible()
    }

    // Inputs
	async fillLogin(value) {
		await global.page.locator("//input[contains(@name, 'username')]").fill(value)
	}
	async fillPassword(value) {
		await global.page.locator("//input[contains(@name, 'passwd')]").fill(value)
	}


	// Buttons
	async clickContinue() {
		await global.page.locator("//button[contains(@class, '_button-login-id')]").click()
	}
    async clickConnect() {
		await global.page.locator("//input[@data-report-event='Signin_Submit']").click()
	}
    async assertConnectIsVisisble() {
        const element = await global.page.locator("//input[@data-report-event='Signin_Submit']")
        await expect(element).toBeVisible()
    }
    
}

module.exports = { SigninObject }