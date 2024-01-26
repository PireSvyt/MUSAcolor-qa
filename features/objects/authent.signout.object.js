const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")

setDefaultTimeout(scenari.authent.signout.timeout * 1000)

class SignoutObject {

	async logOut() {
        await global.page.getByTestId("AppBar-UserProfile").click()
        await global.page.getByTestId("signOut-btn").click()
	}
    
    async assertIAMLoggedOut() {
        const element = await global.page.getByTestId("NavBar-toolbar")
        await expect(element).toBeHidden()
    }  
    
}

module.exports = { SignoutObject }