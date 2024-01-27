const { Given, When, Then } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")
const { AdminCommand } = require("../objects/0.admincommands.object.js")

const adminCommand = new AdminCommand

Then("admin command environment variables are available", async () => {
	await adminCommand.assertEnvIsOk()
})

Given("admin command is fired to drop {string}", async (input) => {
	await adminCommand.dropCollection(input)
})
