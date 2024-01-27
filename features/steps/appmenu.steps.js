const { Given, When, Then } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")
const { AppMenu } = require("../objects/appmenu.object.js")

const appMenu = new AppMenu


When ("I click the app menu icon", async () => {
	await appMenu.clickMenuIcon()
})
When ("I click the app menu item {string}", async (input) => {
	await appMenu.clickMenuItem(input)
})
When ("I click the app close icon", async () => {
	await appMenu.clickCloseIcon()
})

Then ("I shall be on home page", async () => {
	await appMenu.assertIAmOnHomePage()
})

// Reductions
When ("I navigate to {string} page", async (input) => {
	await appMenu.clickMenuIcon()
	await appMenu.assertMenuListIsVisible()
	await appMenu.clickMenuItem(input)
})