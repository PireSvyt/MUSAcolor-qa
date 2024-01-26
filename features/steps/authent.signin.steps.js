const { Given, When, Then } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")
const { SigninObject } = require("../objects/authent.signin.object.js")

const signinObject = new SigninObject

// Landing
Given("I open Landing page without being signed in", async () => {
	await signinObject.navigateToPage()
})

// Login
Then("sign in form should be visible", async () => {
	await signinObject.assertLoginIsVisible()
})
Then("sign in form should be hidden", async () => {
	await signinObject.assertLoginIsHidden()
})
Then("password field should be visible", async () => {
	await signinObject.assertPasswordIsVisible()
})
Then("password field should be hidden", async () => {
	await signinObject.assertPasswordIsHidden()
})
Then("I should be logged in", async () => {
	await signinObject.assertIAMLoggedIn()
})


// Clicks
When ("I click continue button of the sign in form", async () => {
	await signinObject.clickContinue()
})
When ("I click connect button of the sign in form", async () => {
	await signinObject.clickConnect()
})
When ("connect button of the sign in form should be visible", async () => {
	await signinObject.assertConnectIsVisisble()
})

// Inputs
When("I fill login of sign in form with {string}", async function (input) {
	await signinObject.fillLogin(scenari[input])
})
When("I fill password of sign in form with {string}", async function (input) {
	await signinObject.fillPassword(scenari[input])
})

// Reductions
Given("I open Landing page being signed in", async () => {
	await signinObject.navigateToPage()
	//console.log("signinObject.navigateToPage()")
	await signinObject.assertLoginIsVisible()
	//console.log("signinObject.assertLoginIsVisible()")
	await signinObject.fillLogin(scenari["service account 1 login"])
	//console.log("signinObject.fillLogin")
	await signinObject.clickContinue()
	//console.log("signinObject.clickContinue()")
	await signinObject.fillPassword(scenari["service account 1 password"])
	//console.log("signinObject.fillPassword")
	await signinObject.clickConnect()
	//console.log("signinObject.clickConnect()")
	await signinObject.clickConnect()
	//console.log("signinObject.clickConnect()")
	await signinObject.assertIAMLoggedIn()
})
Given("I sign in with credentials of {string}", async (input) => {
	await signinObject.navigateToPage()
	await signinObject.assertLoginIsVisible()
	await signinObject.fillLogin(scenari[input + " login"])
	await signinObject.clickContinue()
	await signinObject.fillPassword(scenari[input + " password"])
	await signinObject.clickConnect()
	await signinObject.clickConnect()
	await signinObject.assertIAMLoggedIn()
})
