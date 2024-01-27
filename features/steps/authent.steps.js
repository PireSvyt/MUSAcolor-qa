const { Given, When, Then } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")
const { Authent } = require("../objects/authent.object.js")

const authent = new Authent

// States
Then("I shall be logged in", async () => {
	await authent.assertIAMLoggedIn()
})
Then("I shall be signed out", async () => {
	await authent.assertIAMLoggedOut()
})

// Landing
Given("I open Landing page without being signed in", async () => {
	await authent.navigateToPage()
})
Then("sign in button shall be visible from Landing page", async () => {
	await authent.assertSignInCallToActionIsVisible()
})

// Modal
Then("sign in modal shall be visible", async () => {
	await authent.assertSignInModalIsVisible()
})
Then("sign in modal shall be hidden", async () => {
	await authent.assertSignInModalIsHidden()
})

// Clicks
When ("I click sign in button of the landing page", async () => {
	await authent.clickSignInCallToAction()
})
When ("I close the sign in modal", async () => {
	await authent.clickCloseCallToAction()
})
When ("I click proceed button of the sign in modal", async () => {
	await authent.clickProceedCallToAction()
})
When ("I click close button of the sign in modal", async () => {
	await authent.clickCloseCallToAction()
})
When("I sign out", async () => {
    await authent.logOut()
})

// Inputs
When("I fill login of sign in modal with {string}", async function (input) {
	await authent.fillLogin(input)
})
/*Then("login field from sign in modal shall in error", async () => {
	await authent.assertLoginFieldIsError()
})*/
When("I fill password of sign in modal with {string}", async function (input) {
	await authent.fillPassword(input)
})
/*Then("password field from sign in modal shall in error", async () => {
	await authent.assertPasswordFieldIsError()
})*/

// Reductions
Given("I open Landing page being signed in", async () => {
	await authent.navigateToPage()
	await authent.assertSignInCallToActionIsVisible()
	await authent.clickSignInCallToAction()
	await authent.fillLogin("practician A")
	await authent.fillPassword("practician A")
	await authent.clickProceedCallToAction()
	await authent.assertIAMLoggedIn()
})
Given("I sign in with credentials of {string}", async (input) => {
	await authent.navigateToPage()
	await authent.assertSignInCallToActionIsVisible()
	await authent.clickSignInCallToAction()
	await authent.fillLogin(input)
	await authent.fillPassword(input)
	await authent.clickProceedCallToAction()
	await authent.assertIAMLoggedIn()
})
