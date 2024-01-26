const { Given, When, Then } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")
const { SignoutObject } = require("../objects/authent.signout.object.js")

const signoutObject = new SignoutObject

When("I sign out", async () => {
    await signoutObject.logOut()
})

Then("I should be signed out", async () => {
	await signoutObject.assertIAMLoggedOut()
})