const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")

setDefaultTimeout(scenari.timeout.appmenu * 1000)

class AppMenu {

	// Icon
	async assertMenuIconIsVisible() {
		const element = await global.page.getByTestId("component-app bar-button-open menu")
		await expect(element).toBeVisible()
	}
	async assertMenuIconIsHidden() {
		const element = await global.page.getByTestId("component-app bar-button-open menu")
		await expect(element).toBeHidden()
	}

	// States
	async assertMenuListIsVisible() {
		const element = await global.page.getByTestId("list-app bar menu")
		await expect(element).toBeVisible()
	}
    async assertMenuListIsHidden() {
        const element = await global.page.getByTestId("list-app bar menu")
        await expect(element).toBeHidden()
    } 
    async assertIAmOnHomePage() {
        const element = await global.page.getByTestId("page-home")
        await expect(element).toBeVisible()
    } 

	// Clicks
	async clickMenuIcon() {
		await global.page.getByTestId("component-app bar-button-open menu").click()
	}
	async clickMenuItem(input) {
		await global.page.getByTestId("list-app bar menu-listitem-" + input).click()
	}
	async clickCloseIcon() {
		await global.page.getByTestId("component-app bar-button-close menu").click()
	}

}

module.exports = { AppMenu }