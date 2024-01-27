const { Given, When, Then } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")
const { HelpPage } = require("../objects/helppage.object.js")

const helpPage = new HelpPage

When ("help page shall be visible", async () => {
	await helpPage.assertHelpPageIsVisible()
})